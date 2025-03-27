import fs from "fs";
import path from "path";

export const getPosts = async () => {
  const contentDir = path.join(process.cwd(), "src/content");
  const filenames = fs.readdirSync(contentDir);
  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const { metadata } = await import(`@/content/${filename}`);

      return {
        slug: filename.replace(/\.mdx?$/, ""),
        description: metadata.description,
        title: metadata.title,
        date: metadata.date,
        cover: metadata.cover,
        members: metadata.members,
      };
    }),
  );
  return posts;
};
