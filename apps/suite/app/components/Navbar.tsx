import Image from 'next/image';
import Link from 'next/link';
import ss_logo from '@repo/ui/assets/logo-17suit@4x.svg';

export const Navbar = () => {
  // create a new `Date` object
  const now = new Date();

  // get the current date and time as a string
  const currentDateTime = now.toLocaleString();
  return (
    <nav className="navbar">
      <Image alt="17 suit logo" className="navbar__logo" src={ss_logo} />
      <div className="navbar__date">{currentDateTime}</div>
      <ul className="navbar__menu">
        <li>
          <Link className="navbar__menu-item" href={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link className="navbar__menu-item" href={'/login'}>
            Login
          </Link>
        </li>
        <li>
          <Link className="navbar__menu-item" href={'/register'}>
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};
