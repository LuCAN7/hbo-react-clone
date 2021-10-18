import Layout from "../components/Layout";
import FeaturedMedia from "../components/FeaturedMedia";
import MediaRow from "../components/MediaRow";
import CastInfo from "../components/CastInfo";
// import Collections from "../components/Collections";

export default function Movie() {
  return (
    <Layout>
      <FeaturedMedia videoUrl='https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&loop=1&start=18' title='Mortal Kombat' location="In theaters and on HBO Max. Straming throughout May 23." mediaUrl='/movies/id'/>
      <MediaRow title='More Like This' type='small-v'/>
      <CastInfo />
      {/* <Collections/> */}
    </Layout>
  )
}
``