import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getAllSortedPosts = () => {
  return getAllPosts().sort((postA, postB) =>
    postA.createdAt < postB.createdAt ? 1 : -1
  );
};

export const getPostById = (id: string) => {
  return getAllPosts().find((post) => post.id === id);
};

const getAllPosts = () => {
  const directory = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(directory);

  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(directory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const data = matterResult.data;

    return {
      id,
      title: data.title,
      createdAt: data.createdAt,
      imageUrl: data.imageUrl,
      summary: data.summary,
      content: matterResult.content,
      ...data,
    };
  });
};
