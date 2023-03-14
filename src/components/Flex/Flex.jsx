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
      style={{
        display: "flex",
        flexDirection: flexDirection,
        flexWrap: flexWrap,
        justifyContent: justifyContent,
        alignItems: alignItems,
        gap: gap,
      }}
    >
      {children}
    </div>
  );
}

export default Flex;
