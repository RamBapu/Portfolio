export const TechIcon = ({
  component,
  className,
}: {
  component: React.ElementType;
  className?: string;
}) => {
  const Component = component;
  return <Component className={className || "size-10"} />;
};
