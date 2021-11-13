// import Image from 'next/image';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useStateContext } from './HBOProvider';

const Search = (props) => {
  const globalState = useStateContext();
  const [popularMovies, setpopularMovies] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [showResults, setshowResults] = useState(false);
  const [text, setText] = useState('');

  // const { id } = router.query;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?primary_release_year=2021&api_key=${process.env.TMDB_API_KEY}`
      )
      .then(function (response) {
        setpopularMovies(
          response.data.results.filter((item, index) => index < 14)
        );
        setshowResults(false);
        // handleSearch();
        console.log(popularMovies);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (globalState.searchOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [globalState.searchOpen]);

  // const handleSubmit = (e) => {
  //   globalState.setSearchOpen(false);
  // }
  const handleChange = (e) => {
    // e.preventDefault();
    setText(e.target.value);
    handleSearch(e);
  };

  const handleSearch = async (e) => {
    try {
      const searchResult = await axios.get(
        `https://api.themoviedb.org/3/search/multi?query=${e.target.value}&api_key=${process.env.TMDB_API_KEY}`
      );
      setSearchData(
        searchResult.data.results.filter(
          (item, index) =>
            item.media_type === 'tv' || item.media_type === 'movie'
        )
      );
      console.log(searchData);
      setshowResults(true);
    } catch (error) {
      console.log(error);
    }
  };

  function somefunc(id, type) {
    console.log('greeeaaat');
  }

  return (
    <div className={`search ${globalState.searchOpen ? 'search--active' : ''}`}>
      <div className='search__input-group'>
        <input
          className='search__input'
          type='text'
          placeholder='Search for a title'
          value={text}
          onChange={handleChange}
          // onSubmit={handleSubmit}
          // Temp fix for error in console....will fix after adding functionality
          // readOnly
        />
        <div
          className='search__close-btn'
          onClick={() => {
            globalState.setSearchOpen(false);
            setText('');
          }}
        >
          <i className='fas fa-times' />
        </div>
      </div>
      <h3 className='search__title'>
        {showResults && searchData.length >= 1
          ? `Search for ${text}`
          : 'Popular Searches'}
      </h3>
      <div className='search__thumbnails'>
        {showResults && searchData.length >= 1 ? (
          <SearchResults
            searchData={searchData}
            closeSearch={globalState.setSearchOpen}
          />
        ) : (
          <PopularResults
            popularMovies={popularMovies}
            closeSearch={globalState.setSearchOpen}
          />
        )}
      </div>
    </div>
  );
};

const PopularResults = (props) => {
  const router = useRouter();
  const clickedThumbnail = (id) => {
    router.push(`/movie/${id}`);
    props.closeSearch(false);
    // console.log('Go to Movie Page...');
  };

  return props.popularMovies.map((data, index) => {
    return (
      <Link href={`/movie/${data.id}`} key={index}>
        <a>
          <div
            className='search__thumbnail'
            onClick={() => clickedThumbnail(data.id)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w185${data.poster_path}`}
              alt='popluar search movies poster'
              // key={}
            />
            <div className='search__top-layer'>
              <i className='fas fa-play' />
            </div>
          </div>
        </a>
      </Link>
    );
  });
};

const SearchResults = (props) => {
  const router = useRouter();

  const clickedThumbnail = (id, type) => {
    router.push(`/${type}/${id}`);
    props.closeSearch(false);
    // console.log('Go to Movie Page...');
  };

  return props.searchData.map((data, index) => {
    return (
      <Link href={`/${data.media_type}/${data.id}`} key={index}>
        <a>
          <div
            className='search__thumbnail'
            onClick={() => clickedThumbnail(data.id, data.media_type)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w185${data.poster_path}`}
              alt='popluar search movies poster'
              // key={}
            />
            <div className='search__top-layer'>
              <i className='fas fa-play' />
            </div>
          </div>
        </a>
      </Link>
    );
  });
};

export default Search;
