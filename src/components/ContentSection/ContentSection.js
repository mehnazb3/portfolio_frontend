import React from 'react';
import Header from '../Header/Header';
import Aux from '../../hoc/Aux';
import ResumeBuilder from '../ResumeBuilder/ResumeBuilder'
const ContentSection = () => {
  return (
    <Aux>
      <Header></Header>
      <ResumeBuilder></ResumeBuilder>
    </Aux>
  );
}
export default ContentSection;