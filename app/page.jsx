import React from 'react';
import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
import HomeBio from "@/components/HomeBio";
import HomeLocationInfo from "@/components/HomeLocationInfo";
import HomeSocial from "@/components/HomeSocial";

const HomePage = () => {
  return (
<>
  <HomeHero/>
  <HomeBio/>
  <HomeLocationInfo/>
  <HomeSocial/>

</>
  );
};

export default HomePage;
