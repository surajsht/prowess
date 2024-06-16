import { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import SearchPopup from "../components/search-popup/SearchPopup";
import PageBanner from "../components/pageBanner/PageBanner";
import "./pages.css";

const AboutUs = () => {
  useEffect(() => {
    document.body.classList.add("page", "about-us");

    return () => document.body.classList.remove("page", "about-us");
  }, []);

  return (
    <>
      <Navbar logoLink="/logo-light.png" />
      <SearchPopup />
      <PageBanner title="about us" />
    </>
  );
};

export default AboutUs;
