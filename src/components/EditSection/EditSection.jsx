import React from "react";
import {Card,Flex,FileForm,ImageForm,Form,} from "../../components";

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
      {cards.map((cardContent, i) => (
        <Card key={i}>{cardContent}</Card>
      ))}
    </Flex>
  );
}

export default EditSection;
