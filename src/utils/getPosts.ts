import fs from "fs";
import path from "path";

export const getPosts = async () => {
  const contentDir = path.join(process.cwd(), "src/content");
  const filenames = fs.readdirSync(contentDir);
  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const { metadata } = await import(`@/content/${filename}.mdx`);

      return {
        slug: filename.replace(/\.mdx?$/, ""),
        title: metadata.title,
        date: metadata.date,
      };
    })
  );
  return posts;
};
