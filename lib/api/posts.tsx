import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "lib/types/post";

export const getAllSortedPosts = () => {
  return getAllPosts().sort((postA, postB) =>
    postA.datePublished < postB.datePublished ? 1 : -1
  );
};

export const getPostById = (id: string) => {
  return getAllPosts().find((post) => post.id === id);
};

export const getPostsInRange = (start: number, end: number) => {
  return getAllPosts().slice(start, end);
};

export const getNumberOfPostPages = (numPerPage: number) => {
  const posts = getAllSortedPosts();
  return Math.ceil(posts.length / numPerPage);
};

const getAllPosts = (): Post[] => {
  const directory = path.join(process.cwd(), "posts");
  const postDirectories = fs.readdirSync(directory);

  return postDirectories.map((postDirectory) => {
    const fileName = fs.readdirSync(path.join(directory, postDirectory))[0];
    const id = postDirectory.replace(/\.mdx$/, "");
    const fullPath = path.join(directory, postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { content, data } = matter(fileContents);
    return {
      id,
      title: data.title,
      datePublished: new Date(data.datePublished),
      dateModified: new Date(data.dateModified),
      imageUrl: data.imageUrl,
      imageWidth: data.imageWidth,
      imageHeight: data.imageHeight,
      summary: data.summary,
      content: content,
      keywords: data.keywords.split(", "),
      ...data,
    };
  });
};
