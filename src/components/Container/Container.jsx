function Container({ children }) {
  return (
    <div className="w-full h-full flex flex-col gap-[20px] px-[10%] py-[20px]">
      {children}
    </div>
  );
}

export default Container;
