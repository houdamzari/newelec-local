function Container({ children }) {
  return (
    <div className="w-full h-full flex flex-col gap-[20px] px-[10%] py-[20px] sm:px-1 xs:px-1">
      {children}
    </div>
  );
}

export default Container;
