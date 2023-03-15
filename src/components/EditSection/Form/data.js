import { security, icon } from "../../../assets";
export const FirstForm = [
  {
    label: "Category",
    width: "w-[35%]",
    addNewAvailable: true,
    data: [
      { icon: security, option: "Safety" },
      { icon: security, option: "Something" },
    ],
  },
  {
    label: "Topic",
    width: "w-[43%]",
    addNewAvailable: true,
    data: [
      { icon: icon, option: "VCA" },
      { icon: icon, option: "BSAA" },
    ],
  },
  {
    label: "Valid For",
    width: "w-[22%]",
    addNewAvailable: false,
    data: [{ option: "1 year" }, { option: "2 years" }],
  },
];
