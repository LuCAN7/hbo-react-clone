import Layout from "../components/Layout";
import FeaturedMedia from "../components/FeaturedMedia";
import PosterView from "../components/PosterView";
import Collections from "../components/Collections";
import CastInfo from "../components/CastInfo";
import Account from "../components/Account";


export default function Movie() {
  return (
    <Layout>
      <FeaturedMedia/>
      <PosterView/>
      <Collections/>
      <CastInfo/>
    </Layout>
  )
}
