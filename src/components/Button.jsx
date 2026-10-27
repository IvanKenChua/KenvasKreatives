export function Button({
  as: Tag = "button",
  variant = "ink",
  size = "md",
  className = "",
  children,
  ...props
}) {
  const tagProps = Tag === "button" ? { type: "button" } : {};

  return (
    <Tag
      {...tagProps}
      className={`btn btn--${variant} btn--${size} ${className}`.trim()}
      {...props}
    >
      {children}
    </Tag>
  );
}
