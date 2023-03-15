import React from "react";
import Card from "../../Card/Card";
import { info } from "../../../assets";
import NumberInput from "../NumberInput/NumberInput";
import ToggleInput from "../ToggleInput/ToggleInput";
import Tooltip from "../../Tooltip/Tooltip";
function ParamCard({ data }) {
  return (
    <Card className=" relative w-full p-[10px]">
      <div className="w-full flex justify-end">
        <Tooltip content={data.info}>
          <img src={info} alt="info" />
        </Tooltip>
      </div>
      <div className="flex flex-col justify-center mt-[4px] items-center gap-[13px]">
        <img src={data.icon} alt="icon" />
        <p className="font-semibold text-xs">{data.label}</p>
      </div>
      {data.toggle ? <ToggleInput /> : <NumberInput unit={data.unit} />}
    </Card>
  );
}

export default ParamCard;
