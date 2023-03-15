import React from "react";
import { FirstForm } from "./data";
import {FormInput,Flex,Dropdown} from "../../../components";

function Form() {
  return (
    <div>
      <Flex
        className="w-full"
        flexDirection={"flex-row"}
        justifyContent={"justify-start"}
        alignItems={"items-center"}
        gap={"gap-[10px]"}
      >
        {FirstForm.map((element) => (
          <Dropdown
            key={element.label}
            label={element.label}
            className={element.width}
            addNewAvailable={element.addNewAvailable}
            dropdownOptions={element.data}
          />
        ))}
      </Flex>
      <Flex
        className={"mt-[17px]"}
        flexDirection={"flex-row"}
        justifyContent={"justify-start"}
        alignItems={"items-center"}
        gap={"gap-[10px]"}
      >
        <FormInput />
        <Dropdown
          className="w-[35%]"
          label="Assign To"
          dropdownOptions={[
            { option: "internal worker" },
            { option: "external worker" },
          ]}
        />
      </Flex>
      <Flex
        className={"mt-[17px]"}
        flexDirection={"flex-row"}
        justifyContent={"justify-start"}
        alignItems={"items-start"}
        gap={"gap-[10px]"}
      >
        <Flex
          flexDirection={"flex-col"}
          justifyContent={"justify-center"}
          alignItems={"items-center"}
          gap={"gap-[13px]"}
        >
          <Dropdown
            className={"w-[180px]"}
            label="Departments"
            optional
            dropdownOptions={[
              { option: "departement1" },
              { option: "departement2" },
            ]}
          />
          <Dropdown
            label="Functions"
            optional
            dropdownOptions={[{ option: "function1" }, { option: "function2" }]}
          />
        </Flex>
        <div>
          <p className="text-sm font-semibold text-textColor-grey">
            Description
          </p>
          <textarea
            name="description"
            placeholder="Type here..."
            className="border-2 h-[126px] border-grey rounded-md mt-[8px] placeholder:italic placeholder:text-textColor-grey placeholder:text-sm p-[10px] "
            cols="40"
          ></textarea>
        </div>
      </Flex>
    </div>
  );
}

export default Form;
