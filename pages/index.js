import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useStateContext } from '../components/HBOProvider';

import Layout from '../components/Layout';
import FeaturedMedia from '../components/FeaturedMedia';
import AuthCheck from '../components/AuthCheck';
import MediaRow from '../components/MediaRow';

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();

  // discover/movie?with_genres=28&primary_relase_year=2021
  return AuthCheck(
    <Layout>
      <FeaturedMedia />
      <MediaRow
        title='Family'
        type='large-v'
        endpoint='discover/movie?with_genres=10751&primary_relase_year=2021'
      />
      <MediaRow
        title='Adventure'
        type='small-v'
        endpoint='discover/movie?with_genres=12&primary_relase_year=2021'
      />
      <MediaRow
        title='Comedy'
        type='small-v'
        endpoint='discover/movie?with_genres=35&primary_relase_year=2021'
      />
      <MediaRow
        title='Action'
        type='small-v'
        endpoint='discover/movie?with_genres=28&primary_relase_year=2021'
      />
      <MediaRow
        title='Drama'
        type='small-v'
        endpoint='discover/movie?with_genres=18&primary_relase_year=2021'
      />
      <MediaRow
        title='Sci-Fi'
        type='small-v'
        endpoint='discover/movie?with_genres=878&primary_relase_year=2021'
      />
      <MediaRow
        title='Romance'
        type='small-h'
        endpoint='discover/movie?with_genres=10749&primary_relase_year=2021'
      />
      <MediaRow
        title='Mystery'
        type='large-h'
        endpoint='discover/movie?with_genres=9648&primary_relase_year=2021'
      />
    </Layout>
  );
}
