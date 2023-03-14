import React from "react";
import Dropdown from "../../Dropdown/Dropdown";
import upload from "../../../assets/upload-icon.svg";
import Flex from "../../Flex/Flex";
function Form() {
  const category = [
    { icon: upload, option: "Safety" },
    { icon: upload, option: "Life" },
  ];
  return (
    <div>
      <Flex
        className="w-full"
        flexDirection={"flex-row"}
        justifyContent={"justify-start"}
        alignItems={"items-center"}
        gap={"gap-[10px]"}
      >
        <Dropdown label="Category" addNewAvailable dropdownOptions={category} />
        <Dropdown label="Topic" addNewAvailable dropdownOptions={category} />
        <Dropdown label="Valid For" dropdownOptions={category} />
      </Flex>
      <Flex
        flexDirection={"flex-row"}
        justifyContent={"justify-start"}
        alignItems={"items-center"}
        gap={"gap-[10px]"}
      >
        <Dropdown label="Training" dropdownOptions={category} />
        <Dropdown label="Assign To" dropdownOptions={category} />
      </Flex>
      <Flex
        flexDirection={"flex-row"}
        justifyContent={"justify-start"}
        alignItems={"items-center"}
        gap={"gap-[10px]"}
      >
        <Flex
          flexDirection={"flex-col"}
          justifyContent={"justify-start"}
          alignItems={"items-center"}
          gap={"gap-[10px]"}
        >
          <Dropdown label="Training" dropdownOptions={category} />
          <Dropdown label="Assign To" dropdownOptions={category} />
        </Flex>
      </Flex>
    </div>
  );
}

export default Form;
