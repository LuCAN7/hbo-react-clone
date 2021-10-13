// import Image from 'next/image';
import Account from './Account';
import Search from './Search';
import { useStateContext } from './HBOProvider';
import ls from 'local-storage';



const Header = (props) => {
  const globalState = useStateContext();
  // let user = ls('users', user);
  return (
    <header className={`top-header ${globalState.sideNavOpen || globalState.accountNavOpen ? 'top-header--menu-open':''}`}>
      <div className='top-header__left-side'>
        <div className='top-header__menu-btn'
        onClick={()=> {
          globalState.setSideNavOpen(true);
          // globalState.setMenuOpen(true);
        }
        }>
          <i className='fas fa-bars' />
        </div>
        <div className='top-header__search-btn'
        onClick={()=>globalState.setSearchOpen(true)}>
          <i className='fas fa-search' />
        </div>
      </div>
      <div className='top-header__logo' />
      <div className='top-header__account'
      onClick={()=> globalState.setAccountNavOpen(!globalState.accountNavOpen) }>
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
