import React from "react";
import FileInput from "../../FileInput/FileInput";
function ImageForm() {
  return (
    <div className=" w-[329px] h-[338px]">
      <p className="text-sm text-textColor-grey font-semibold">Image</p>
      <FileInput imageInput className={"h-[202px] mt-8"} />
      <p className="mt-8 text-sm text-grey">
        *Only JPG, PNG files are allowed. Image must be less than 2MB
      </p>
    </div>
  );
}

export default ImageForm;
