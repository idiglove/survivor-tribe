import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-3xl font-bold">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold">{children}</h2>
    ),
    a: (props) => (
      <a
        className="text-secondary underline font-bold cursor-pointer"
        target="_blank"
        {...props}
      />
    ),
    blockquote: ({ children }) => (
      <blockquote
        className="italic"
        style={{
          marginLeft: "1rem",
          borderLeft: "2px solid gray",
          paddingLeft: "1rem",
        }}
      >
        {children}
      </blockquote>
    ),
    // img: (props) => (
    //   <Image
    //     sizes="100vw"
    //     style={{ width: "100%", height: "auto" }}
    //     {...(props as ImageProps)}
    //   />
    // ),
    ...components,
  };
}
