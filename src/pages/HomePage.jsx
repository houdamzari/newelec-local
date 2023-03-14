import React from 'react';
import {
  TitleSection,
  EditSection,
  QuestionSection,
  Container,
  ParamsSection,
} from "../components";
function HomePage(props) {
  return (
    <>
      <Container>
        <TitleSection />
        <EditSection />
        <QuestionSection />
        <ParamsSection />
      </Container>
    </>
  );
}

export default HomePage;