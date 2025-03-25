import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";

export default function Page() {
  const posts = getPosts();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/case-study/${post.slug}`}>
            {post.title} ({post.date})
          </Link>
        </li>
      ))}
    </ul>
  );
}

interface Post {
  slug: string;
  title: string;
  date: string;
}

const getPosts = () => {
  const contentDir = path.join(process.cwd(), "src/content");
  const filenames = fs.readdirSync(contentDir);
  const posts: Post[] = filenames.map((filename) => {
    const filePath = path.join(contentDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.mdx?$/, ""),
      title: data.title,
      date: data.date,
    };
  });
  return posts;
};
