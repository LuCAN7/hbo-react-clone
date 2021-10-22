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
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  
  useEffect(() => {
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
        mediaUrl={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        title={movie.title}
        location='In theaters and on HBO Max. Streaming throughout May 23.'
        overview={movie.overview}
        linkUrl={`/movie/${movie.id}`}
        type='single'
      />
      <LazyLoad
        offset={-200}
        placeholder={<Placeholders title='Movies' type='small-v' />}
      >
        <MediaRow
          title='Similar To This'
          type='small-v'
          endpoint={`movie/${props.query.id}/similar?`}
          // endpoint={`https://api.themoviedb.org/3/${props.endpoint}&api_key=${process.env.TMDB_API_KEY}`}
        />
      </LazyLoad>

      <CastInfo mediaId={props.query.id}/>
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  // console.log('getServerSideProps ---->', context.query);
  return { props: { query: context.query } };
}
