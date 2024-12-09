import Hero from "./components/Hero";
import Blog from "./components/Blog"
import Feature from "./components/Feature"
import Latest from "./components/latest"
import Offer from "./components/Offer"
import Discount from "./components/Discount"


export default function Home() {
  return (

    <div>
       <Hero/>
       <Feature/>
       <Latest/>
       <Offer/>
       <Discount/>
       <Blog/>
    </div>
  );
}
