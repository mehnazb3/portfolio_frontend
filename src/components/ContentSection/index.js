import React from 'react';
import UserProfile from '../UserProfile';
import Aux from '../../hoc/Aux';
import Qualification from '../Qualification';
import WorkExperience from '../WorkExperience';
import Degree from '../Degree';
import Certifications from '../Certifications';
import ResumeBuilder from '../ResumeBuilder/ResumeBuilder'
const ContentSection = () => {
  return (
    <Aux>
      <UserProfile/>
      <Qualification/>
      <WorkExperience/>
      <Degree/>
      <Certifications/>
      {/* <ResumeBuilder></ResumeBuilder> */}
    </Aux>
  );
}
export default ContentSection;