import React from "react";
import Card from "../../Card/Card";
function ParamCard({ data }) {
  return <Card className="relative w-[180px]">{data.label}</Card>;
}

export default ParamCard;
