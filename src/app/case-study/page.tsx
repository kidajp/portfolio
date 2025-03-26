import Link from "next/link";
import { getPosts } from "@/utils/getPosts";

export default async function Page() {
  const posts = await getPosts();
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
