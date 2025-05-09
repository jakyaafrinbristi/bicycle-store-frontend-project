import Banner from "@/components/Banner"
import { AboutUs } from "./AboutUs"
import FeaturedBicycles from "./FeaturedBicycles"
import Testimonial from "./Testimonial"
import { OfferSection } from "@/components/OfferSection"
import Newsletter from "./NewsLetter"
import SingleBlogHighlight from "@/components/blog"

import CategorySection from "@/components/Category"



export const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
 <FeaturedBicycles></FeaturedBicycles>
 <OfferSection></OfferSection>
 <SingleBlogHighlight></SingleBlogHighlight>
<CategorySection></CategorySection>
 <Newsletter></Newsletter>
 <Testimonial></Testimonial>

    </div>

  )
}
