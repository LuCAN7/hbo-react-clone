import { useEffect } from 'react';
import Link from 'next/link';
import { useStateContext } from './HBOProvider';

const SideNav = (props) => {
  const globalState = useStateContext();

  useEffect(() => {
    if (globalState.sideNavOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [globalState.sideNavOpen]);

  return (
    <article
      className={`side-nav ${
        globalState.sideNavOpen ? 'side-nav--active' : ''
      }`}
      onClick={() => globalState.setSideNavOpen(false)}
    >
      <div
        className='side-nav__close-btn'
        onClick={() => globalState.setSideNavOpen(false)}
      >
        <i className='fas fa-times' />
      </div>
      <ul className='side-nav__main'>
        <li onClick={() => globalState.setSideNavOpen(false)}>
          <Link href='/'>
            <a className='side-nav__link--home' href='/'>
              Home
            </a>
          </Link>
        </li>
        {/* Display TMDB movie category */}
        <li onClick={() => globalState.setSideNavOpen(false)}>
          <Link href='/movie'>
            <a className='side-nav__link--home'>Movies</a>
          </Link>
        </li>
        <li onClick={() => globalState.setSideNavOpen(false)}>
          <Link href='/tv'>
            <a className='side-nav__link--home'>Series</a>
          </Link>
        </li> 
      </ul>
      <div className='side-nav__divider' />
      <ul className='side-nav__main'>
        <li>
          <Link href='/'>Originals</Link>
        </li>
        <li>
          <Link href='/'>Just Added</Link>
        </li>
        <li>
          <Link href='/'>Last Chance</Link>
        </li>
        <li>
          <Link href='/'>Coming Soon</Link>
        </li>
        <li>
          <Link href='/'>Trending Now</Link>
        </li>
      </ul>
    </article>
  );
};

export default SideNav;
