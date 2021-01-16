import fs from "fs";
import path from "path";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";

export const getAllSortedPosts = () => {
  return getAllPosts().sort((postA, postB) =>
    postA.createdAt < postB.createdAt ? 1 : -1
  );
};

export const getPostById = (id: string) => {
  return getAllPosts().find((post) => post.id === id);
};

export const getPostsInRange = (start: number, end: number) => {
  return getAllPosts().slice(start, end);
};

export const getNumberOfPostPages = (numPerPage: number) => {
  const posts = getAllPosts();
  return Math.ceil(posts.length / numPerPage);
};

const getAllPosts = () => {
  const directory = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(directory);

  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { content, data } = matter(fileContents);
    return {
      id,
      title: data.title,
      createdAt: new Date(data.createdAt),
      imageUrl: data.imageUrl,
      summary: data.summary,
      content: content,
      ...data,
    };
  });
};
