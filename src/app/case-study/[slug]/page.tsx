import { getPosts } from "@/utils/getPosts";
import { CheckIcon } from "@heroicons/react/24/solid";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post, metadata } = await import(`@/content/${slug}.mdx`);
  return (
    <>
      <header className="bg-source - mx-[calc(50%-50vw)] my-0 bg-gray-100">
        <div className="relative mx-auto w-[800px] px-6 pt-24 pb-8">
          <p className="mb-2 text-sm text-gray-500">{metadata.date}</p>
          <h1 className="mb-6 text-3xl font-bold">{metadata.title}</h1>
          <div className="flex gap-16">
            <section>
              <h2 className="mb-2 text-xs text-gray-500">担当領域</h2>
              <ul className="grid gap-2">
                {metadata.role.map((role: string) => (
                  <li key={role} className="flex items-center gap-2">
                    <CheckIcon className="h-4 w-4 text-emerald-600" />
                    {role}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="mb-2 text-xs text-gray-500">メンバー構成</h2>
              <ul className="grid gap-2">
                {metadata.members.map((member: string) => (
                  <li key={member} className="flex items-center gap-2">
                    {member}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </header>
      <section className="pt-10">
        <Post />
      </section>
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
