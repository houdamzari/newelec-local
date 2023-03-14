function Flex({
  children,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  className,
  gap,
  onClick,
}) {
  return (
    <div
      onClick={() => (onClick ? onClick() : null)}
      className={`flex ${
        className +
        " " +
        flexDirection +
        " " +
        flexWrap +
        " " +
        justifyContent +
        " " +
        alignItems +
        " " +
        gap
      }`}
    >
      {children}
    </div>
  );
}

export default Flex;
