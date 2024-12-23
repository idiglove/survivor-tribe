interface ContentHeadingProps {
  children: React.ReactNode;
}

const ContentHeading = ({ children }: ContentHeadingProps) => {
  return <h2 className="font-bold">{children}</h2>;
};


export default ContentHeading;