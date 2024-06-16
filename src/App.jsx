import Category from "./components/category/Category";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import RowGrid from "./components/rowGrid/RowGrid";
import SearchPopup from "./components/search-popup/SearchPopup";
import Testimonial from "./components/testimonial/Testimonial";
import Goals from "./components/goals/Goals";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TrainningProgram from "./components/trainningProgram/TrainningProgram";
import WorkoutStep from "./components/workoutStep/WorkoutStep";
import Carousel from "./components/carousel/Carousel";
import Footer from "./components/footer/Footer";
import OurTeam from "./components/ourTeam/OurTeam";

const App = () => {
  return (
    <>
      <Navbar />
      <SearchPopup />
      <Hero />
      <Category />
      <RowGrid />
      <Testimonial />
      <TrainningProgram />
      <Goals />
      <OurTeam />
      <WorkoutStep />
      <Carousel />
      <Footer />
    </>
  );
};

export default App;
