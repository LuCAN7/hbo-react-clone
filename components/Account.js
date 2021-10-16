// import Image from 'next/image';
import Link from 'next/link';
import { useStateContext } from './HBOProvider';

const Account = (props) => {
  const globalState = useStateContext();
  const loopComponent = (comp, loops) => {
    const mylistViewed = [];
    for (let i = 0; i < loops; i++) {
      mylistViewed.push(comp);
    }
    return mylistViewed;
  };

  return (
    <div
      className={`account ${
        globalState.accountNavOpen ? 'account--active' : ''
      }`}
    >
      <div className='account__details'>
        <div className='account__title'>My List</div>
        <div className='account__watch-list'>
          {loopComponent(
            <div className='account__watch-video'>
              <img
                src='https://image.tmdb.org/t/p/original/pZ4hR5IIoHHfNjot9rq4F96OGAi.jpg'
                alt='movie cover image'
              />
              <div className='account__watch-overlay'>
                <div className='account__watch-buttons'>
                  <div className='account__watch-circle'>
                    <i className='fas fa-play' />
                  </div>
                  <div className='account__watch-circle'>
                    <i className='fas fa-times' />
                  </div>
                </div>
              </div>
            </div>,
            6 // The amount of viewed components passed in as an argument
          )}
        </div>
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
