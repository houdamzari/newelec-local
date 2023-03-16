import { useState, useCallback } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import DropdownHeader from "./DropdownHeader/DropdownHeader";
import DropdownBox from "./DropdownBox/DropdownBox";
import DropdownContent from "./DropdownContent/DropdownContent";
function Dropdown({
  label,
  addNewAvailable,
  optional,
  dropdownOptions,
  borderless,
  className,
}) {
  const [optionSelected, setOptionSelected] = useState(dropdownOptions[0]);
  const [open, setOpen] = useState(false);
  const ref = useClickOutside(() => setOpen(false));

  const handleSelectOption = useCallback(
    (i) => {
      setOptionSelected(dropdownOptions[i]);
      setOpen(false);
    },
    [dropdownOptions]
  );

  return (
    <div className={`w-full text-sm font-semibold ${className ?? ""}`}>
      <DropdownHeader
        label={label}
        addNewAvailable={addNewAvailable}
        optional={optional}
      />

      <div className="relative mt-[8px]" ref={ref}>
        <DropdownBox
          borderless={borderless}
          open={open}
          setOpen={setOpen}
          optionSelected={optionSelected}
        />
        {open && (
          <DropdownContent
            dropdownOptions={dropdownOptions}
            handleSelectOption={handleSelectOption}
          />
        )}
      </div>
    </div>
  );
}
export default Dropdown;
