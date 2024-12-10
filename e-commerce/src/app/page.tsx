import Hero from "./components/Hero";
import Blog from "./components/Blog"
import Feature from "./components/Feature"
import Latest from "./components/latest"
import Offer from "./components/Offer"
import Unique from "./components/Unique"
import Discount from "./components/Discount"
import Topcategories from "./components/Topcategories"
import TrendingProduct from "./components/TrendingProduct"


export default function Home() {
  return (

    <div>
       <Hero/>
       <Feature/>
       <Latest/>
       <Offer/>
       <Unique/>
       <Discount/>
       <TrendingProduct/>
       <Topcategories/>
       <Blog/>
    </div>
  );
}
