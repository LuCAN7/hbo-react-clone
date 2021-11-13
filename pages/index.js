import { useRouter } from 'next/router';
import axios from 'axios';
import LazyLoad from 'react-lazyload';

import { useStateContext } from '../components/HBOProvider';
import Layout from '../components/Layout';
import FeaturedMedia from '../components/FeaturedMedia';
import AuthCheck from '../components/AuthCheck';
import MediaRow from '../components/MediaRow';
import Placeholders from '../components/Placeholders';

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();

  return AuthCheck(
    <Layout>
      <FeaturedMedia
        // ** Feature Update to **
        // mediaUrl= set to the lastViewedMedia value stored in HBOProvider
        // set based on the last FeaturedMedia component - clickedPlay() value
        mediaUrl={`https://image.tmdb.org/t/p/original/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg`}
        title='Mortal Kombat'
        location='In theaters and on HBO Max. Streaming throughout May 23.'
        overview=''
        type='front'       
        linkUrl='/movie/460465'
      />
      {/* <GenreNav mediaType={props.query.mediaType} genres={props.genresData}/> */}
      <LazyLoad
        offset={200}
        placeholder={<Placeholders title='Movie' type='large-v' />}
      >
        <MediaRow
          title='Movie'
          mediaType='movie'
          type='large-v'
          endpoint='discover/movie?sort_by=popularity.desc&primary_release_year=2021'
          
        />
      </LazyLoad>
      <LazyLoad
        offset={200}
        placeholder={<Placeholders title='Series' type='small-h' />}
      >
        <MediaRow
          title='Series'
          mediaType='series'
          type='small-h'
          endpoint='discover/tv?primary_release_year=2021'
          
        />
      </LazyLoad>
      <LazyLoad
        offset={200}
        placeholder={<Placeholders title='Family' type='large-v' />}
      >
        <MediaRow
          title='Family'
          type='large-v'
          endpoint='discover/movie?with_genres=10751&primary_release_year=2021'
          
        />
      </LazyLoad>
      <LazyLoad
        offset={200}
        placeholder={<Placeholders title='Family' type='small-v' />}
      >
        <MediaRow
          title='Adventure'
          type='small-v'
          endpoint='discover/movie?with_genres=12&primary_release_year=2021'
          
        />
      </LazyLoad>
      <LazyLoad
        offset={200}
        placeholder={<Placeholders title='Family' type='small-v' />}
      >
        <MediaRow
          title='Comedy'
          type='small-v'
          endpoint='discover/movie?with_genres=35&primary_release_year=2021'
          
        />
      </LazyLoad>
      <LazyLoad
        offset={200}
        placeholder={<Placeholders title='Family' type='small-v' />}
      >
        <MediaRow
          title='Action'
          type='small-v'
          endpoint='discover/movie?with_genres=28&primary_release_year=2021'
          
        />
      </LazyLoad>
      <LazyLoad
        offset={200}
        placeholder={<Placeholders title='Family' type='small-v' />}
      >
        <MediaRow
          title='Drama'
          type='small-v'
          endpoint='discover/movie?with_genres=18&primary_release_year=2021'
          
        />
      </LazyLoad>
      <LazyLoad
        offset={200}
        placeholder={<Placeholders title='Family' type='smallge-v' />}
      >
        <MediaRow
          title='Sci-Fi'
          type='small-v'
          endpoint='discover/movie?with_genres=878&primary_release_year=2021'
          
        />
      </LazyLoad>
      <LazyLoad
        offset={200}
        placeholder={<Placeholders title='Family' type='small-h' />}
      >
        <MediaRow
          title='Romance'
          type='small-h'
          endpoint='discover/movie?with_genres=10749&primary_release_year=2021'
          
        />
      </LazyLoad>
      <LazyLoad
        offset={200}
        placeholder={<Placeholders title='Family' type='large-h' />}
      >
        <MediaRow
          title='Mystery'
          type='large-h'
          endpoint='discover/movie?with_genres=9648&primary_release_year=2021'
          
        />
      </LazyLoad>
    </Layout>
  );
}

