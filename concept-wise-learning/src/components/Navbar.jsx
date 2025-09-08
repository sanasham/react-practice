import { Link } from 'react-router';
import logo from '../assets/logo.jpg';
const Navbar = () => {
  return (
    <div className='flex items-center justify-between bg-gray-800 text-white p-4'>
      <img src={logo} alt='' className='h-12 w-12' />
      <ul className='flex space-x-4'>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/products'>
          <li>Products</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/contact'>
          <li>Contact</li>
        </Link>
      </ul>

      <button className='border'>Get Started</button>
    </div>
  );
};

export default Navbar;
