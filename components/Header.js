// import Image from 'next/image';
import Link from 'next/dist/client/link';
import Account from './Account';
import Search from './Search';
import { useStateContext } from './HBOProvider';
import ls from 'local-storage';

const Header = () => {
  const globalState = useStateContext();
  // let user = ls('users', user);
  return (
    <header
      className={`top-header ${
        globalState.sideNavOpen || globalState.accountNavOpen
          ? 'top-header--menu-open'
          : ''
      }`}
    >
      <div className='top-header__left-side'>
        <div
          className='top-header__menu-btn'
          onClick={() => {
            globalState.setSideNavOpen(!globalState.sideNavOpen);
            // globalState.setNavOpen(true);
          }}
        >
          <i className='fas fa-bars' />
        </div>
        <div
          className='top-header__search-btn'
          onClick={() => globalState.setSearchOpen(true)}
        >
          <i className='fas fa-search' />
        </div>
      </div>
      <Link href='/'>
        <a>
          <div className='top-header__logo' />
        </a>
      </Link>
      <div
        className='top-header__account'
        onClick={() =>
          globalState.setAccountNavOpen(!globalState.accountNavOpen)
        }
      >
        <img
          className='top-header__user-img'
          src='https://uifaces.co/our-content/donated/gPZwCbdS.jpg'
          alt=''
        />
        <div className='top-header__user-name'>{globalState.user}</div>
      </div>
      <Account />
      {/* {globalState.searchOpen ? <Search />: ''} */}
      <Search />
    </header>
  );
};

export default Header;
