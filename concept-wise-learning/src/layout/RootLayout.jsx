import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        {/* This is where the child routes will be rendered */}
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
