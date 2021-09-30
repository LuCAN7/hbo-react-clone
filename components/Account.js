const Account = (props) => {
  const loopComponent = (comp, loops)=>{
    const mylistViewed=[];
    for(let i = 0; i < loops; i++){
      mylistViewed.push(comp);
    }
    return mylistViewed;
  }

  return (
    <div className='account'>
      <div className='account__details'>
        <div className='account__title'>My List</div>
        <div className='account__watch-list'>
          
          {loopComponent((  <div className='account__watch-video'>
            <img src='https://image.tmdb.org/t/p/original/pZ4hR5IIoHHfNjot9rq4F96OGAi.jpg' />
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
          </div>), 6)}

        </div>
      </div>
      <div className='account__watch-menu'>
        <ul className='account__main'>
          <li>
            <a href='/' className='active'>
              My List
            </a>
          </li>
        </ul>
        <div className='side-nav__divider' />
        <ul className='account__main'>
          <li>
            <a href='/'>Account</a>
          </li>
          <li>
            <a href='/'>Sign Out</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Account;
