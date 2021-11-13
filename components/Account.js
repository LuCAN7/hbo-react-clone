// import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useStateContext } from './HBOProvider';

const Account = () => {
  const globalState = useStateContext();

  useEffect(() => {
    if (globalState.accountNavOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [globalState.accountNavOpen]);

  const showWatchList = () => {
    return globalState.watchList.map((item, index) => {
      return (
        <div className='account__watch-video' key={index}>
          <img src={item} alt='movie cover image' />
          <div className='account__watch-overlay'>
            <div className='account__watch-buttons'>
              <div className='account__watch-circle'  onClick={() => {
            globalState.setAccountNavOpen(!globalState.accountNavOpen);

          }}>
                <i className='fas fa-play' />
              </div>
              <div className='account__watch-circle'  onClick={() => {
            globalState.setAccountNavOpen(!globalState.accountNavOpen);
  
          }}>
                <i className='fas fa-times' />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div
      className={`account ${
        globalState.accountNavOpen ? 'account--active' : ''
      }`}
    >
      <div className='account__details'>
        <div className='account__title'>My List</div>
        <div className='account__watch-list'>{globalState.watchList !== null ? showWatchList() : ''}</div>
      </div>
      <div className='account__watch-menu'>
        <ul className='account__main'>
          <li>
            <Link href='/' className='active'>
              My List
            </Link>
          </li>
        </ul>
        <div className='side-nav__divider' />
        <ul className='account__main'>
          <li>
            <Link href='/'>Account</Link>
          </li>
          <li>
            <Link href='/'>Sign Out</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Account;
