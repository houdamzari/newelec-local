import Button from "../Button/Button";
import Flex from "../Flex/Flex";

function TitleSection() {
  return (
    <Flex
      flexDirection={"flex-row"}
      justifyContent={"justify-between"}
      alignItems={"items-center"}
    >
      <h1>Edit Training "Working At Height"</h1>
      <Flex
        flexDirection={"flex-row"}
        justifyContent={"justify-center"}
        alignItems={"items-center"}
        gap={"gap-[10px]"}
      >
        <Button secondary />
        <Button primary />
      </Flex>
    </Flex>
  );
}

export default TitleSection;
