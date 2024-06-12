import Category from "./components/category/Category";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import RowGrid from "./components/rowGrid/RowGrid";
import SearchPopup from "./components/search-popup/SearchPopup";
import Testimonial from "./components/testimonial/Testimonial";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TrainningProgram from "./components/trainningProgram/TrainningProgram";

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
    </>
  );
};

export default App;
