import React from 'react';
import Navigation from '../Navigation/Navigation';
import ContentSection from '../ContentSection/ContentSection';

import Footer from '../Footer/Footer';
import './Layout.css';

const Layout = () => {
  return (<div className="Layout">
      <Navigation></Navigation>
      <ContentSection>
      </ContentSection>
      <Footer/>
  </div>);
}
export default Layout;