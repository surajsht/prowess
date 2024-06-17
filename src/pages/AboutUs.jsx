import { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import SearchPopup from "../components/search-popup/SearchPopup";
import PageBanner from "../components/pageBanner/PageBanner";
import Goals from "../components/goals/Goals";
import Testimonial from "../components/testimonial/Testimonial";
import OurTeam from "../components/ourTeam/OurTeam";
import "./pages.css";
import FeaturedPost from "../components/featuredPost/FeaturedPost";

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
      <Goals />
      <Testimonial />
      <OurTeam />
      <FeaturedPost />
    </>
  );
};

export default AboutUs;
