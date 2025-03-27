import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => <h2 {...props} className="mb-3 block text-2xl font-bold" />,
    p: (props) => <p {...props} className="mb-13" />,
    ...components,
  };
}
