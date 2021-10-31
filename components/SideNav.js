import Link from 'next/link';
import { useStateContext } from './HBOProvider';

const SideNav = (props) => {
  const globalState = useStateContext();

  return (
    <article
      className={`side-nav ${
        globalState.sideNavOpen ? 'side-nav--active' : ''
      }`}
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
          <Link href='/moive'>
            <a className='side-nav__link--home'>
              Movies
            </a>
          </Link>
        </li>
        <li onClick={() => globalState.setSideNavOpen(false)}>
          <Link href='/tv'>
            <a className='side-nav__link--home'>
              Series
            </a>
          </Link>
        </li>
        {/* <li>
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
        </li> */}
      </ul>
      <div className='side-nav__divider' />
      <ul className='side-nav__main'>
        {/* <li>
          <Link href='/'>Action</Link>
        </li>
        <li>
          <Link href='/'>Animation</Link>
        </li>
        <li>
          <Link href='/'>Comedy</Link>
        </li>
        <li>
          <Link href='/'>Crime</Link>
        </li>
        <li>
          <Link href='/'>Documentaries</Link>
        </li>
        <li>
          <Link href='/'>Drama</Link>
        </li>
        <li>
          <Link href='/'>Fantasy & Sci-Fi</Link>
        </li>
        <li>
          <Link href='/'>Horror</Link>
        </li>
        <li>
          <Link href='/'>International</Link>
        </li>
        <li>
          <Link href='/'>Kids & Family</Link>
        </li>
        <li>
          <Link href='/'>Mystery</Link>
        </li>
        <li>
          <Link href='/'>News/Talk</Link>
        </li>
        <li>
          <Link href='/'>Reality</Link>
        </li>
        <li>
          <Link href='/'>Romance</Link>
        </li>
        <li>
          <Link href='/'>Shorts</Link>
        </li>
        <li>
          <Link href='/'>Sports</Link>
        </li> */}
      </ul>
    </article>
  );
};

export default SideNav;
