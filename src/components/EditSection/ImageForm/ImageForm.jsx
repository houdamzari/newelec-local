import React from "react";
import FileInput from "../../FileInput/FileInput";
function ImageForm() {
  return (
    <div>
      <p>Image</p>
      <FileInput imageInput />
      <p className="mt-8 text-sm text-grey">
        *Only JPG, PNG files are allowed. Image must be less than 2MB
      </p>
    </div>
  );
}

export default ImageForm;
