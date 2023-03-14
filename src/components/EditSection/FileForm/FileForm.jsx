import React from "react";
import FileInput from "../../FileInput/FileInput";

function FileForm() {
  return (
    <div className="w-[300px]">
      <p>Training file</p>
      <FileInput />
      <p className="mt-8 text-sm text-grey">
        Only JPG, PNG files are allowed. Image must be less than 2MB
      </p>
    </div>
  );
}

export default FileForm;
