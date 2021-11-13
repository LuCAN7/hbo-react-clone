import Link from 'next/link';
import { useState } from 'react';

const GenreNav = (props) => {
  const [activeNav, setActiveNav] = useState(false);
  // console.log("GENRE-NAV", props)
  setTimeout(()=>{setActiveNav(true)}, 200)
  return (
    <ul className={`genre-nav ${activeNav ? 'genre-nav--active' : ''}`}>
      <GenreList genresData={props.genresData} mediaType={props.mediaType}/>
      
    </ul>
  );
};

const GenreList = (props)=> {
  // console.log("GENRE-LIST", props)
  return props.genresData.map((item)=> {
    return (
      <li key={item.id}>
      <a href={`/${props.mediaType}/genre/${item.id}`}>
        {item.name}
        </a>
    </li>
    )
  });
}
export default GenreNav;
