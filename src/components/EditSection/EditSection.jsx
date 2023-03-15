import React from "react";
import Flex from "../Flex/Flex";
import Form from "./Form/Form";
import ImageForm from "./ImageForm/ImageForm";
import FileForm from "./FileForm/FileForm";
import Card from "../Card/Card";
function EditSection() {
  const cards = [<Form />, <ImageForm />, <FileForm />];
  return (
    <Flex
      flexDirection={"flex-row"}
      alignItems={"items-center"}
      justifyContent={"justify-center"}
      gap={"gap-[10px]"}
      flexWrap={"flex-wrap"}
    >
      {cards.map((cardContent) => (
        <Card key={cardContent}>{cardContent}</Card>
      ))}
    </Flex>
  );
}

export default EditSection;
