import React from "react";
import FileInput from "../../FileInput/FileInput";
function ImageForm() {
  return (
    <div className=" w-[294px] h-[311px] ">
      <p className="text-sm text-textColor-grey font-semibold">Image</p>
      <FileInput imageInput className={"h-[202px] mt-[18px]"} />
      <p className="mt-[45px] text-[11px] text-[#B5B5B5] text-center">
        *Only JPG, PNG files are allowed. Image must be less than 2MB
      </p>
    </div>
  );
}

export default ImageForm;
