import { security, icon } from "../../../assets";
export const FirstForm = [
  {
    label: "Category",
    width: "w-[165px] xs:w-full",
    addNewAvailable: true,
    data: [
      { icon: security, option: "Safety" },
      { icon: security, option: "Something" },
    ],
  },
  {
    label: "Topic",
    width: "w-[196px] xs:w-full",
    addNewAvailable: true,
    data: [
      { icon: icon, option: "VCA" },
      { icon: icon, option: "BSAA" },
    ],
  },
  {
    label: "Valid For",
    width: "w-[104px] xs:w-full",
    addNewAvailable: false,
    data: [{ option: "1 year" }, { option: "2 years" }],
  },
];
