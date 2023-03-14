import React, { useState } from "react";
import { upload } from "../../assets";
import Flex from "../Flex/Flex";
function FileInput({ imageInput }) {
  const [file, setFile] = useState(null);
  const acceptance = imageInput ? "image/*" : ".pdf,.mp4,.mov,.ppt,.pptx,.key";

  return (
    <>
      <div className="relative border-2 p-4 mt-8 border-dotted w-full flex flex-col gap-1 justify-center items-center">
        <input
          accept={acceptance}
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
          className="absolute cursor-pointer appearance-none opacity-0  w-full h-full top-0 left-0"
        />
        <img src={upload} alt="img-upload" className="w-[50px] " />
        <p>Drag and drop your {imageInput ? "image" : "file"} here</p>
        <p>Or browse files</p>
      </div>
      {file && (
        <Flex
          className="bg-green-500 mt-4 p-2 rounded-md"
          flexDirection={"flex-row"}
          alignItems={"items-center"}
          justifyContent={"justify-between"}
        >
          <div>
            <p className="text-sm text-white">Completed</p>
            <p className="text-sm text-white">{file.name}</p>
          </div>
          <Flex
            className="bg-white rounded-full w-[30px] h-[30px] text-xl  cursor-pointer"
            justifyContent={"justify-center"}
            alignItems={"items-center"}
            onClick={() => setFile("")}
          >
            <p className="relative top-[-2px]">x</p>
          </Flex>
        </Flex>
      )}
    </>
  );
}

export default FileInput;
