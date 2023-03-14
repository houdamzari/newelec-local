import {
  Navbar,
  TitleSection,
  EditSection,
  QuestionSection,
  Container,
  ParamsSection,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <TitleSection />
        <EditSection />
        <QuestionSection />
        <ParamsSection />
      </Container>
    </>
  );
}

export default App;
