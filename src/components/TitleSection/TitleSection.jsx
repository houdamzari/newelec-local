import Button from "../Button/Button";
import Flex from "../Flex/Flex";

function TitleSection() {
  return (
    <Flex
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <h1>Edit Training "Working At Height"</h1>
      <Flex
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"10px"}
      >
        <Button secondary />
        <Button primary />
      </Flex>
    </Flex>
  );
}

export default TitleSection;
