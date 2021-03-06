// import Image from 'next/image';
import Link from 'next/dist/client/link';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MediaRow = (props) => {
  const [loadingData, setLoadingData] = useState(true);
  const [moviesData, setMoviesData] = useState([]);


  useEffect(() => {
    setLoadingData(true);
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
  }, [props.updateData]);

  const Thumbnail = (props) => {
    const thumbSize = (type) => {
      if (type === 'large-v') {
        return '400';
      }
      if (type === 'small-v') {
        return '185';
      }
      if (type === 'large-h') {
        return '500';
      }
      if (type === 'small-h') {
        return '342';
      }
    };

    return (
      <Link
        href={`/${props.mediaType === 'movie' ? 'movie' : 'tv'}/${
          props.movie.id
        }`}
      >
        <a>
          <div className='media-row__thumbnail'>
            <img
              src={`https://image.tmdb.org/t/p/w${thumbSize(props.type)}/${
                props.movie.poster_path
              }`}
              alt='Movie Poster Thumbnail'
            />
            <div className='media-row__top-layer'>
              <i className='fas fa-play' />
            </div>
          </div>
        </a>
      </Link>
    );
  };

  const Skeleton = () => {
    return (
      <div className='media-row__thumbnail-skeleton'>
        <div className='media-row__thumbnail-skeleton-img'></div>
      </div>
    );
  };

  const loopComponent = (comp, digit) => {
    let thumbnails = [<Skeleton key={'a'}/>,
    <Skeleton key={'b'}/>,
      <Skeleton key={'c'}/>,
      <Skeleton key={'d'}/>,
      <Skeleton key={'f'}/>,
      <Skeleton key={'g'}/>,
      <Skeleton key={'h'}/>];
    // for (let i = 0; i < digit; i++) {
    //   thumbnails.push(comp);
    // }
    return thumbnails;
  };
  const ShowThumbnails = (type) => {
    // Simulate loading data from db
    // setTimeout(()=> setLoadingData(false), 2000);
    return loadingData
      ? loopComponent(
        <Skeleton />, 10)
      : moviesData.map((m) => {
          // console.log(m);
          return <Thumbnail movie={m} key={m.id} type={type} mediaType={props.mediaType}/>;
        });
  };

  return (
    <div className={`media-row ${props.type}`}>
      <h3 className='media-row__title'>{props.title}</h3>
      <div className='media-row__thumbnails'>{ShowThumbnails(props.type)}</div>
    </div>
  );
};
export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
MediaRow.defaultProps = {
  mediaType: 'movie'
}

export default MediaRow;
