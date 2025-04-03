import { getPosts } from "@/utils/getPosts";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { CoverImage } from "@/components/ui/cover-image/CoverImage";

export const Works = async () => {
  const posts = await getPosts();

  return (
    <div className="grid gap-16">
      {posts.map((post) => (
        <article key={post.slug} className="group relative">
          <h3 className="mb-2 flex items-center gap-2 text-2xl font-bold">
            <Link
              href={`/case-study/${post.slug}`}
              className="before:absolute before:inset-0 before:z-10 before:content-['']"
            >
              {post.title}
            </Link>
            <ArrowRightIcon className="size-6 transition-transform group-hover:translate-x-1 group-hover:text-gray-600" />
          </h3>
          <p className="mb-6 text-sm text-gray-600">{post.description}</p>
          <div className="relative overflow-hidden rounded-md border border-gray-300">
            <CoverImage
              src={post.cover}
              alt={post.title}
              width={1600}
              height={900}
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </article>
      ))}
    </div>
  );
};
