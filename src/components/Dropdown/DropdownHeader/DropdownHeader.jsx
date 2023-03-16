import React from "react";
import Flex from "../../Flex/Flex";
function DropdownHeader({ label, addNewAvailable, optional }) {
  return (
    <Flex
      flexDirection={"flex-row"}
      justifyContent={"justify-between"}
      alignItems={"items-center xs:items-start"}
      flexWrap={"xs:flex-col"}
    >
      <p className="text-textColor-grey">{label}</p>
      {addNewAvailable && <p className="text-textColor-blue">Add new+</p>}
      {optional && <p className="text-textColor-lightGrey text-xs">Optional</p>}
    </Flex>
  );
}

export default DropdownHeader;
