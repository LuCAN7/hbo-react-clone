import { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import axios from 'axios';

import Layout from '../../components/Layout';
import FeaturedMedia from '../../components/FeaturedMedia';
import MediaRow from '../../components/MediaRow';
import CastInfo from '../../components/CastInfo';
import Placeholders from '../../components/Placeholders';
import AuthCheck from '../../components/AuthCheck';

export default function SingleMediaPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  
  
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.query.id}?api_key=${process.env.TMDB_API_KEY}`
      )
      .then(function (response) {
        setMovie(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [props.query.id]);

  return AuthCheck(
    <Layout>
      <FeaturedMedia
        title={props.query.mediaType === 'movie'? props.mediaData.title :
      props.mediaData.name}
        mediaUrl={`https://image.tmdb.org/t/p/original${props.mediaData.backdrop_path}`}
        location='In theaters and on HBO Max. Streaming throughout May 23.'
        overview={props.mediaData.overview}
        linkUrl={`/${props.query.mediaType === 'movie'? 'movie' :
        'tv'}/${props.mediaData.id}`}
        type='front'
      />
      <LazyLoad
        offset={-200}
        placeholder={<Placeholders title='Movies' type='small-v' />}
      >
        <MediaRow
          title='Similar To This'
          type='small-v'
          mediaType={props.query.mediaType}
          endpoint={`${props.query.mediaType === 'movie' ? 'movie' : 'tv'}/${props.query.id}/similar?`}
          // endpoint={`https://api.themoviedb.org/3/${props.endpoint}&api_key=${process.env.TMDB_API_KEY}`}
        />
      </LazyLoad>

      <CastInfo mediaType={props.query.mediaType} mediaId={props.query.id}/>
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  // console.log('getServerSideProps ---->', context.query);
  let mediaData; 
  try {
    mediaData = await axios.get(
        `https://api.themoviedb.org/3/${context.query.mediaType}/${context.query.id}?api_key=${process.env.TMDB_API_KEY}`
      )
  } catch(error){
    console.log(error);
  }


  return { props: { mediaData: mediaData.data, query: context.query } };
}
