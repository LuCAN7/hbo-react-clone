import Layout from "../components/Layout";
import FeaturedMedia from "../components/FeaturedMedia";
import MediaRow from "../components/MediaRow";
import Collections from "../components/Collections";
import CastInfo from "../components/CastInfo";

export default function Movie() {
  return (
    <Layout>
      <FeaturedMedia/>
      <MediaRow title='More Like This' type='small-v'/>
      <Collections/>
      <CastInfo/>
    </Layout>
  )
}
