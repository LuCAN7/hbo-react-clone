import Layout from "../components/Layout";
import FeaturedMedia from "../components/FeaturedMedia";
import ForYouList from "../components/ForYouList";
import JustAdded from "../components/JustAdded";
import PosterView from "../components/PosterView";
import Collections from "../components/Collections";

export default function Index() {
  return (
    <Layout>
      <FeaturedMedia/>
      <ForYouList/>
      <JustAdded/>
      <PosterView/>
      <Collections/>

    </Layout>
  )
}
