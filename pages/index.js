import { useRouter } from 'next/router';
import { useStateContext } from '../components/HBOProvider';
import LazyLoad from 'react-lazyload';

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
      <FeaturedMedia videoUrl='https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&loop=1&start=18' title='Mortal Kombat' location="In theaters and on HBO Max. Straming throughout May 23." mediaUrl='/movies/id'/>
      <LazyLoad
        offset={200}
        placeholder={<Placeholders title='Family' type='large-v' />}
      >
        <MediaRow
          title='Family'
          type='large-v'
          endpoint='discover/movie?with_genres=10751&primary_relase_year=2021'
        />
      </LazyLoad>
      <LazyLoad
        offset={200}
        placeholder={<Placeholders title='Family' type='small-v' />}
      >
        <MediaRow
          title='Adventure'
          type='small-v'
          endpoint='discover/movie?with_genres=12&primary_relase_year=2021'
        />
      </LazyLoad>
      <LazyLoad
        offset={200}
        placeholder={<Placeholders title='Family' type='small-v' />}
      >
        <MediaRow
          title='Comedy'
          type='small-v'
          endpoint='discover/movie?with_genres=35&primary_relase_year=2021'
        />
      </LazyLoad>
      <LazyLoad
        offset={200}
        placeholder={<Placeholders title='Family' type='small-v' />}
      >
        <MediaRow
          title='Action'
          type='small-v'
          endpoint='discover/movie?with_genres=28&primary_relase_year=2021'
        />
      </LazyLoad>
      <LazyLoad
        offset={200}
        placeholder={<Placeholders title='Family' type='small-v' />}
      >
        <MediaRow
          title='Drama'
          type='small-v'
          endpoint='discover/movie?with_genres=18&primary_relase_year=2021'
        />
      </LazyLoad>
      <LazyLoad
        offset={200}
        placeholder={<Placeholders title='Family' type='smallge-v' />}
      >
        <MediaRow
          title='Sci-Fi'
          type='small-v'
          endpoint='discover/movie?with_genres=878&primary_relase_year=2021'
        />
      </LazyLoad>
      <LazyLoad
        offset={200}
        placeholder={<Placeholders title='Family' type='small-h' />}
      >
        <MediaRow
          title='Romance'
          type='small-h'
          endpoint='discover/movie?with_genres=10749&primary_relase_year=2021'
        />
      </LazyLoad>
      <LazyLoad
        offset={200}
        placeholder={<Placeholders title='Family' type='large-h' />}
      >
        <MediaRow
          title='Mystery'
          type='large-h'
          endpoint='discover/movie?with_genres=9648&primary_relase_year=2021'
        />
      </LazyLoad>
    </Layout>
  );
}
