import Image from 'next/image';
import Account from "./Account";
import Search from './Search';

const Header = (props) => {
  return (
    <header className='top-header'>
      <div className='top-header__left-side'>
        <div className='top-header__menu-btn'>
          <i className='fas fa-bars' />
        </div>
        <div className='top-header__search-btn'>
          <i className='fas fa-search' />
        </div>
      </div>
      <div className='top-header__logo' />
      <div className='top-header__account'>
        <Image
          className='top-header__user-img'
          src='https://uifaces.co/our-content/donated/gPZwCbdS.jpg'
          alt=''
        />
        <div className='top-header__user-name'>Bryant</div>
      </div>
      <Account />
      <Search />
    </header>
  );
};

export default Header;
