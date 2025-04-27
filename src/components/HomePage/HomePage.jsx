import HomePageHero from "./HomePageHero/HomePageHero"
import HomePageAbout from "./HomePageAbout/HomePageAbout"
import HomePageServices from "./HomePageServices/HomePageServices"
import HomePagePortfolio from "./HomePagePortfolio/HomePagePortfolio"
import HomePageTestimonials from "./HomePageTestimonials/HomePageTestimonials"
import HomePageCTA from "./HomePageCTA/HomePageCTA"

const HomePageEl = () => {
  return (
    <div>
      <HomePageHero />
      <HomePageAbout />
      <HomePageServices />
      <HomePagePortfolio />
      <HomePageTestimonials />
      <HomePageCTA />
    </div>
  )
}

export default HomePageEl
