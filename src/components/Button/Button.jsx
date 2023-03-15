function Button({ primary, secondary }) {
  return (
    <>
      {primary && (
        <button className=" px-[27px] py-[10px] rounded-md bg-orange text-white font-bold">
          Update & Save
        </button>
      )}
      {secondary && (
        <button className="bg-transparent text-[#B5B5B5] font-bold text-base">
          Cancel
        </button>
      )}
    </>
  );
}

export default Button;
