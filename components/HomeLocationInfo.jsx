import React from 'react';
import styles from '@/assets/styles/HomeLocationInfo.module.css';

import {
    FaMapPin,
} from "react-icons/fa"

const HomeLocationInfo = () => {

  return (
      <section className={styles.container}>
          <section className={styles.secHeader}>
              <h1>Our Locations</h1>

          </section>

          <section className={styles.iconContainers}>
              <div className={styles.iconCategory}>
                  <div>
                      <FaMapPin className={styles.iconStyles}/>
                  </div>
                  <div className={styles.iconText}><p>2223 S. Ashland</p><p>Chicago, Il</p><p>312-243-2222</p></div>
              </div>
              <div className={styles.iconCategory}>
                  <div>
                      <FaMapPin className={styles.iconStyles}/>
                  </div>
                  <div className={styles.iconText}><p>421 W. Grand</p><p>Chicago, Il</p><p>312-243-1111</p></div>
              </div>
              <div className={styles.iconCategory}>
                  <div>
                      <FaMapPin className={styles.iconStyles}/>
                  </div>
                  <div className={styles.iconText}><p>8393 E. 79th</p><p>Chicago, Il</p><p>312-113-2222</p></div>
              </div>
          </section>

          <section className={styles.secHeader}>

              <p>
                  With three convenient Chicago locations, each offers the quality and care you expect from our team.
                  Stop by South Ashland for a neighborhood vibe, West Grand for a quick west-side cut, or East 79th for
                  a welcoming South Side fade. Wherever you are, our skilled barbers are ready to serve you.
              </p>

          </section>
          <section className={styles.clipPathEnd}></section>
      </section>
  );
};

export default HomeLocationInfo;
