import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => <h2 {...props} className="mb-3 block text-2xl font-bold" />,
    h3: (props) => <h3 {...props} className="mb-3 block text-xl font-bold" />,
    p: (props) => <p {...props} className="mb-13" />,
    ul: (props) => <ul {...props} className="my-8 ml-8 list-disc" />,
    ol: (props) => <ol {...props} className="my-8 ml-8 list-decimal" />,
    ...components,
  };
}
