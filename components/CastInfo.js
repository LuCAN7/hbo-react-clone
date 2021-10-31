import axios from "axios";
// import { load } from "dotenv";
import {useState, useEffect} from 'react'

const CastInfo = (props) => {
  const [loadingData, setLoadingData] = useState(true)
  const [credits, setCredits] = useState([]);
  // const router = useRouter();
  // console.log('SingleMediaPage - ', typeof props.query.id);
  // const { id } = router.query;
  // console.log(movie);
  useEffect(() => {
    setLoadingData(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.mediaId}/credits?api_key=${process.env.TMDB_API_KEY}`
        // `https://api.themoviedb.org/t/p/original$${movie.backdrop_path}?api_key=${process.env.TMDB_API_KEY}`
      )
      .then(function (response) {
        // console.log('CastInfo Response --> ',response.data)
        setCredits(response.data);
        setLoadingData(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [props.mediaId]);

const showCast = () => {
  // console.log('showCast Credits--> ',credits);
  if(loadingData !== true){

    return credits.cast.map((item) => {
      return (
        <ul className='cast-info__crew'>
          <li>{item.character}</li>
          <li>{item.name}</li>
      </ul>
      )
    })
  } else {
    return <div>Loading Cast Info</div>
  }
}
const showCrew = () => {
  console.log('showCrew Credits--> ',credits);
  if(loadingData !== true){

    return credits.crew.map((item) => {
      return (
        <ul className='cast-info__crew'>
          <li>{item.job}</li>
          <li>{item.name}</li>
      </ul>
      )
    })
  } else {
    return <div>Loading Crew Info</div>
  }
}

  return (
    <div className='cast-info'>
      {/* CAST & CREW */}
      <div className='cast-info__group-title'>Cast</div>
      <div className='cast-info__list'>
        {showCast()}
      </div>
      <div className='cast-info__group-title'>Crew</div>
      <div className='cast-info__list'>
        {showCrew()}
      </div>
      
    </div>
    );
  
        {/* <div className='cast-info__group-title'>Crew</div>
        <div className='cast-info__list'>
        <ul className='cast-info__crew'>
          <li>Spencer Winston</li>
          <li>Will Smith</li>
        </ul>
      */}
      {/* 
      DIRECTOR
      <div className='cast-info__group-title'>Director</div>
      <div className='cast-info__list'>
        <ul className='cast-info__crew'>
          <li>George Lucas</li>
        </ul>
      </div> */}
      {/* PRODUCER */}
      {/* <div className='cast-info__group-title'>Producer</div>
      <div className='cast-info__list'>
        <ul className='cast-info__crew'>
          <li>Christopher Nolan</li>
          <li>George Lucas</li>
        </ul>
      </div> */}
      {/* SPECIAL FX */}
      {/* <div className='cast-info__group-title'>Special FX</div>
      <div className='cast-info__list'>
        <ul className='cast-info__crew'>
          <li>Nate Robert</li>
          <li>Kevin Earnhart</li>
        </ul>
      </div>
    </div> */}

  }
export default CastInfo;
