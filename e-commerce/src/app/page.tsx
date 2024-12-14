import Hero from "./components/Hero"
import Feature from "./components/Feature"
import Latest from "./components/Latest"
import Offer from "./components/Offer"
import UniqueFeature from "./components/UniqueFeature"
import TrendingProduct from "./components/TrendingProduct"
import Discount from "./components/Discount"
import Topcategories from "./components/Topcategories"
import LatestUpdate from "./components/LatestUpdate"
import Blog from "./components/Blog"

export default function Home() {
  return (

    <div>
      <Hero/>
      <Feature/>
      <Latest/>
      <Offer/>
      <UniqueFeature/>
      <TrendingProduct/>
      <Discount/>
      <Topcategories/>
      <LatestUpdate/>
      <Blog/>
    </div>
  );
}
