import { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import Layout from '../../components/Layout';
import FeaturedMedia from '../../components/FeaturedMedia';
import MediaRow from '../../components/MediaRow';
import CastInfo from '../../components/CastInfo';
import Placeholders from '../../components/Placeholders';
import axios from 'axios';
import AuthCheck from '../../components/AuthCheck';
import { useRouter } from 'next/router';

export default function SingleMediaPage(props) {
  const [movie, setMovie] = useState({});
  // const router = useRouter();
  // console.log('SingleMediaPage - ', typeof props.query.id);
  // const { id } = router.query;
  // console.log(movie);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.query.id}?api_key=${process.env.TMDB_API_KEY}`
        // `https://api.themoviedb.org/t/p/original$${movie.backdrop_path}?api_key=${process.env.TMDB_API_KEY}`
      )
      .then(function (response) {
        setMovie(response.data);
        
        // setLoadingData(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
          endpoint={`movie/${movie.id}/similar?`}
          // 'discover/movie?with_genres=10751&primary_relase_year=2021'
        />
      </LazyLoad>

      <CastInfo />
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  // console.log('getServerSideProps ---->', context.query);
  return { props: { query: context.query } };
}
