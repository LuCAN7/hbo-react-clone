// import Image from 'next/image';

const Collections = (props) => {
  const loopComponent = (comp, digit) => {
    const thumbnails = [];
    for (let i = 0; i < digit; i++) {
      thumbnails.push(comp);
    }
    return thumbnails;
  };
  return (
    <div className='collections'>
      <h3 className='collections__title'>Collections</h3>
      <div className='collections__thumbnails'>
        <div className='collections__details'>
          <h3 className='collections__details--title'>
            John Wick: All 4 Films
          </h3>
          <p className='collections__details--info'>
            An ex-hit-man comes out of retirement to track down the gangsters
            that killed his dog and took everything from him.
          </p>
          <div className='collections__details--btn'>Watch All Now</div>
        </div>
        {loopComponent(
          <div className='collections__thumbnail'>
            <img
              src='https://image.tmdb.org/t/p/original/pZ4hR5IIoHHfNjot9rq4F96OGAi.jpg'
              alt=''
            />
            <div className='collections__top-layer'>
              <i className='fas fa-play' />
            </div>
          </div>,
          10
        )}
      </div>
    </div>
  );
};

export default Collections;
