import React from 'react';
import Navigation from '../Navigation';
import ContentSection from '../ContentSection';

import Footer from '../Footer';
import {LayoutWrapper} from './styles';

const Layout = () => {
  return (
    <LayoutWrapper>
      <Navigation></Navigation>
      <ContentSection/>
      <Footer/>
    </LayoutWrapper>
  );
}
export default Layout;