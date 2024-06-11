import Category from "./components/category/Category";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import SearchPopup from "./components/search-popup/SearchPopup";

const App = () => {
  return (
    <>
      <Navbar />
      <SearchPopup />
      <Hero />
      <Category />
    </>
  );
};

export default App;
