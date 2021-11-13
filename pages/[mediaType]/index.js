import { useRouter } from 'next/router';
import axios from 'axios';
import LazyLoad from 'react-lazyload';

import { useStateContext } from '../../components/HBOProvider';
import { shuffleArray } from '../../components/MediaRow';
import Layout from '../../components/Layout';
import FeaturedMedia from '../../components/FeaturedMedia';
import AuthCheck from '../../components/AuthCheck';
import MediaRow from '../../components/MediaRow';
import Placeholders from '../../components/Placeholders';
import GenreNav from '../../components/GenreNav';


export default function mediaTypePage(props) {
  const globalState = useStateContext();
  const router = useRouter();
  
  const showThumbTypes = ()=> {
    let thumbType;
    return props.genresData.map((genre)=> {
      thumbType = shuffleArray(globalState.thumbTypes)[0]
        return (
        <LazyLoad
        offset={200}
        placeholder={<Placeholders title={genre.name} type={thumbType} key={genre.id}/>}
        key={genre.id}
        >
          <MediaRow
            title={genre.name}
            mediaType={props.query.mediaType}
            type={thumbType}
            endpoint={`discover/${props.query.mediaType}?with_genres=${genre.id}&sort_by=popularity.desc&primary_release_year=2021`}
            key={genre.id}          
          />
        </LazyLoad>
      )
    })
    
  }
  return AuthCheck(
    <Layout>
      <FeaturedMedia
        mediaUrl={`https://image.tmdb.org/t/p/original${props.featureData.backdrop_path}`}
        title={props.query.mediaType === 'movie'? props.featureData.title : props.featureData.name}
        linkUrl={`${props.query.mediaType}/${props.featureData.id}`}
        location='In theaters and on HBO Max. Streaming from now throughout May 23.'
        overview=''
        type='single'
        mediaType={props.query.mediaType}
        mediaId={props.featureData.id}        
      />
      <GenreNav mediaType={props.query.mediaType} genresData={props.genresData}/> 
      {showThumbTypes()}
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps(context) {
  let genresData;
  let featureData;
  // console.log(context.query);
  try {
    genresData = await axios.get(
      `https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?api_key=${process.env.TMDB_API_KEY}`
    );
    featureData = await axios.get(
      // 'https://api.themoviedb.org/3/movie/550?api_key=25924de1a04055bc5b346171037ca912'
      `https://api.themoviedb.org/3/discover/${context.query.mediaType}?api_key=${process.env.TMDB_API_KEY}`
    );
    // console.log(genresData.data);
    console.log('FEAT--> ',featureData.data);
  } catch (error) {
    console.log(error);
  }

  return {props: { genresData: genresData.data.genres, featureData: shuffleArray(featureData.data.results)[0], query: context.query } };
}
