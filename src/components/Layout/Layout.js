import React from 'react';
import Navigation from '../Navigation/Navigation';
import ContentSection from '../ContentSection/ContentSection';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import classes from './Layout.css';

const Layout = () => {
  return (<div className={classes.Layout}>
      <Navigation></Navigation>
      <ContentSection>
          <Header></Header>
      </ContentSection>
      <Footer></Footer>
  </div>);
}
export default Layout;