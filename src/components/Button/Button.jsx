function Button({ primary, secondary }) {
  return (
    <>
      {primary && <button className="bg-orange-400">Update & Save</button>}
      {secondary && <button className="bg-transparent">Cancel</button>}
    </>
  );
}

export default Button;
