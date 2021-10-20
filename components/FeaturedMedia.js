import { useRouter } from 'next/router';
import Link from 'next/link';

const FeaturedMedia = (props) => {
  const router = useRouter();
  const { id } = router.query;

  const clickedPlay = () => {
    router.push(props.linkUrl);
    console.log('Go to Movie Page...');
  };

  const clickedMoreInfo = (e) => {
    console.log('Go to Movie Page...');
  };

  const showMedia = ()=> {
    if(props.type === 'front'){
      return(
        <iframe
        className='featured-media__video'
        width='100%'
        height='100%'
        src={props.mediaUrl}
        allow='accelerometer; autoplay;clipboard-write;
        encrypted-media; gyroscope; picture-in-picture;'
        allowFullScreen
      />
      )
    } else {
      return <img className='featured-media__img' src={props.mediaUrl}/>
    }
  }
  return (
    <div className='featured-media'>
      {/* <iframe  
    //     className='featured-media__video'
    //     width='100%'
    //     height='100%'
    //     src={`https://api.themoviedb.org/t/p/original${props.videoUrl}`}
    //     allow='accelerometer; autoplay;clipboard-write;
    //     encrypted-media; gyroscope; picture-in-picture;'
    //     allowFullScreen
    //   />*/}
      {showMedia()}
      <div className='featured-media__bg'>
        <div className='featured-media__contianer'>
          <div className='featured-media__title' onClick={clickedPlay}>
            {props.title}
          </div>
          <div className='featured-media__playing'>NOW PLAYING</div>
          <div className='featured-media__location'>{props.location}</div>
          <div className='featured-media__location'>{props.overview}</div>
          <div className='featured-media__buttons'>
            <div className='featured-media__play-btn' onClick={clickedPlay}>
              <i className='fas fa-play' />
            </div>
            <div className='featured-media__info-btn' onClick={clickedMoreInfo}>
              MORE INFO
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMedia;
