function Flex({
  children,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  className,
  gap,
}) {
  return (
    <div
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
