import React from "react";
import HomeHero from "../components/HomeHero";
import HomeBio from "../components/HomeBio";
import HomeLocationInfo from "../components/HomeLocationInfo";
import HomeSocial from "../components/HomeSocial";

const HomePage = () => {
  return (
<main className="overflow-hidden">
  <HomeHero/>
  <HomeBio/>
  <HomeLocationInfo/>
  <HomeSocial/>

</main>
  );
};

export default HomePage;
