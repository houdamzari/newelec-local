function Flex({
  children,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  gap,
}) {
  return (
    <div
      className={`flex ${
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
