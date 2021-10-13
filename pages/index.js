import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useStateContext } from '../components/HBOProvider';
import Layout from "../components/Layout";
import FeaturedMedia from "../components/FeaturedMedia";
import ForYouList from "../components/ForYouList";
import JustAdded from "../components/JustAdded";
import PosterView from "../components/PosterView";
import Collections from "../components/Collections";
import AuthCheck from '../components/AuthCheck';

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();
  
  // useEffect(() => {
  //   // const loggedIn = false;
  //   // if (loggedIn === false) {
  //   //   router.push('/create');
  //   // }
  //   // // Use below return for cleanup function
  //   // // return () => {
  //   // //   cleanup
  //   // // }
  // }, []);

  return (
    AuthCheck(
    <Layout>
      <FeaturedMedia/>
      <ForYouList/>
      <JustAdded/>
      <PosterView/>
      <Collections/>
    </Layout>
  ));
}
