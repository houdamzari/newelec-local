import React from 'react';
import {
  TitleSection,
  EditSection,
  QuestionSection,
  Container,
  ParamsSection,
} from "../components";
function Trainings(props) {
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

export default Trainings;