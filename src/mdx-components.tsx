import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => <h2 {...props} className="mb-2 block text-2xl font-bold" />,
    ...components,
  };
}
