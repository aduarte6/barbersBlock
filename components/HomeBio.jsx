
import React from 'react';
import styles from '@/assets/styles/HomeBio.module.css'
import Image from 'next/image'


const HomeBio = () => {
  return (
      <section className={styles.HomeBioContainer}>
          <div className={styles.HomeBioSection}>
              <div className={styles.Header}>
                  <p>Chicago's Newest Barbershop</p>
              </div>
              <div className={styles.bio}>
                  <p>
                      Da Barbers Block is dedicated to serving our community with a blend of style, quality,
                      and authenticity. Whether you’re looking for a fresh cut, a classic style, or something
                      bold and new, we aim to make each visit more than just a haircut. it’s an experience
                      crafted just for you.
                  </p>
                  <p>
                      With location throughout Chicago, we pride ourselves on being more than just a
                      barbershop. We’re a part of your block, a place where everyone has space, stories are shared,
                      and connections are made. Our skilled barbers bring unmatched expertise to every cut,
                      treating all clients with care and attention to detail. From the latest trend to timeless
                      classics. we have the skills to make your vision a reality.
                  </p>


              </div>

          </div>
          <div className={styles.chiPngParent}>
              <Image  className={styles.chiPng} src="/images/home/chicagoout.webp" alt="https://stock.adobe.com/images/chicago/431255482?prev_url=detail" width={100} height={800} />

          </div>
          <div className={styles.bioClip}></div>
      </section>
  );
};

export default HomeBio;
