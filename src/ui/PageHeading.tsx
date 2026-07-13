interface PageHeadingProps {
  children: React.ReactNode;
}

export default function PageHeading({ children }: PageHeadingProps) {
  return <h1 className="text-4xl font-bold text-center">{children}</h1>;
}
