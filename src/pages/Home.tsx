import Banner from "@/components/Banner"
import { AboutUs } from "./AboutUs"
import FeaturedBicycles from "./FeaturedBicycles"
import Testimonial from "./Testimonial"
import { OfferSection } from "@/components/OfferSection"
import Newsletter from "./NewsLetter"



export const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
 <FeaturedBicycles></FeaturedBicycles>
 <Testimonial></Testimonial>
 <OfferSection></OfferSection>
 <Newsletter></Newsletter>

    </div>

  )
}
