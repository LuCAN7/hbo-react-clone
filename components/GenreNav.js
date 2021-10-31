import Link from 'next/link';
import { useState } from 'react';
// import { useStateContext } from './HBOProvider';

const GenreNav = (props) => {
  // const globalState = useStateContext();
  const [activeNav, setActiveNav] = useState(false);
  setTimeout(()=>{setActiveNav(true)}, 300)
  return (
    <ul className={`genre-nav ${activeNav ? 'genre-nav--active' : ''}`}>
      <li>
        <Link href='/'>
          <a href='/'>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <a href='/'>Home</a>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <a href='/'>Home</a>
        </Link>
      </li>
    </ul>
  );
};

export default GenreNav;
