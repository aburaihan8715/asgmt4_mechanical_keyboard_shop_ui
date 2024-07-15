import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import ScrollToTop from 'react-scroll-to-top';

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
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

export default AppLayout;
