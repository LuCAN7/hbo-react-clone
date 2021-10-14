// import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MediaRow = (props) => {
  const [loadingData, setLoadingData] = useState(true);
  const [moviesData, setMoviesData] = useState([]);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const Thumbnail = (props) => {
    return (
      <div className='media-row__thumbnail'>
        <img
          src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}
          alt=''
        />
        <div className='media-row__top-layer'>
          <i className='fas fa-play' />
        </div>
      </div>
    );
  };

  const Skeleton = () => {
    return (
      <div className='media-row__thumbnail-skeleton'>
        <div className='media-row__thumbnail-skeleton-img'></div>
      </div>
    );
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${props.endpoint}&api_key=${process.env.TMDB_API_KEY}`
      )
      .then(function (response) {
        setMoviesData(shuffleArray(response.data.results));
        setLoadingData(false);
        // console.log(moviesData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const loopComponent = (comp, digit) => {
    let thumbnails = [];
    for (let i = 0; i < digit; i++) {
      thumbnails.push(comp);
    }
    return thumbnails;
  };
  const ShowThumbnails = () => {
    // Simulate loading data from db
    // setTimeout(()=> setLoadingData(false), 2000);
    return loadingData
      ? loopComponent(<Skeleton />, 10)
      : moviesData.map((m) => {
          return <Thumbnail movie={m} />;
        });
    // Use if you dont have data from TMDB api
    // loopComponent( <Thumbnail/>, 10)
  };
  return (
    <div className={`media-row ${props.type}`}>
      <h3 className='media-row__title'>{props.title}</h3>
      <div className='media-row__thumbnails'>{ShowThumbnails()}</div>
    </div>
  );
};

export default MediaRow;
