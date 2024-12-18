import React from 'react';
import styles from '@/assets/styles/HomeLocationInfo.module.css';

import {
    FaMapPin,
} from "react-icons/fa"
import Testimonials from "@/components/testimonials/Testimonials";

const HomeLocationInfo = () => {

  return (
      <section className={styles.container}>

            <Testimonials/>



          {/*<section className={styles.clipPathEnd}></section>*/}
      </section>
  );
};

export default HomeLocationInfo;
