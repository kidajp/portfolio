import { getPosts } from "@/utils/getPosts";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post, metadata } = await import(`@/content/${slug}.mdx`);
  return (
    <>
      <h1>{metadata.title}</h1>
      <Post />
    </>
  );
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { metadata } = await import(`@/content/${slug}.mdx`);

  return {
    title: metadata.title,
  };
}

export const dynamicParams = false;
