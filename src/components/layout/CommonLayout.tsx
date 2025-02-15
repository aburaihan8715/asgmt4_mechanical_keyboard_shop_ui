import Header from '../common-view/Header';

import Footer from '../common-view/Footer';
import ScrollToTop from 'react-scroll-to-top';

import { Outlet } from 'react-router';

const CommonLayout = () => {
  return (
    <>
      <Header />
      <div className="mt-20">
        <Outlet />
      </div>
      <Footer />
      <ScrollToTop
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        smooth
        color="#6f00ff"
      />
    </>
  );
};

export default CommonLayout;
