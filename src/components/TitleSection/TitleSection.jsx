import Button from "../Button/Button";
import Flex from "../Flex/Flex";

function TitleSection() {
  return (
    <Flex justifyContent={"justify-center"} alignItems={"align-center"}>
      <Flex
        className={"w-[1130px]"}
        flexDirection={"flex-row"}
        justifyContent={"justify-between"}
        alignItems={"items-center"}
      >
        <h1 className="text-lg font-semibold text-[#7C7C7C]">
          Edit Training "Working At Height"
        </h1>
        <Flex
          flexDirection={"flex-row"}
          justifyContent={"justify-center"}
          alignItems={"items-center"}
          gap={"gap-[25px]"}
        >
          <Button secondary />
          <Button primary />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default TitleSection;
