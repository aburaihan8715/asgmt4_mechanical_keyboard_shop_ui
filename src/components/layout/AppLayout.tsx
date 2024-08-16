import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import ScrollToTop from 'react-scroll-to-top';
import usePageRefreshAlert from '@/hooks/usePageRefreshAlert';

const AppLayout = () => {
  usePageRefreshAlert();
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

export default AppLayout;
