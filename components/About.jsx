import React from 'react';
import Image from "next/image";
import styles from "@/assets/styles/ServHero.module.css";
import HomeSocial from "@/components/HomeSocial";
import style from '@/assets/styles/About.module.css'


const About = () => {
  return (
      <section>
          <section>
              <Image
                  className={styles.servHeaderImage}
                  src="/images/about/aboutHeader.jpg"
                  alt="https://unsplash.com/photos/red-and-black-leather-office-rolling-chair-XTAtx9UhNBo"
                  width={1200}
                  height={800}
              />
          </section>

          <div className={style.aboutText}>

              <section className={style.aboutus}>
                  <h1 className={style.h1}>About Us</h1>
                  <div className={style.bio}>
                      <p>
                          Da Barbers Block is dedicated to serving our community with a blend of style, quality,
                          and authenticity. Whether you’re looking for a fresh cut, a classic style, or something
                          bold and new, we aim to make each visit more than just a haircut. it is an experience
                          crafted just for you.
                      </p>
                      <p>
                          With location throughout Chicago, we pride ourselves on being more than just a
                          barbershop. We are a part of your block, a place where everyone has space, stories are shared,
                          and connections are made. Our skilled barbers bring unmatched expertise to every cut,
                          treating all clients with care and attention to detail. From the latest trend to timeless
                          classics. we have the skills to make your vision a reality.
                      </p>


                  </div>
              </section>

              <section className={style.vision}>
                  <h1 className={style.h1}>Our Vision</h1>
                  <div className={style.bio}>
                      <p>
                          our vision is in community and connection. We believe a barbershop should be more than
                          just a place for a haircut its a space where people feel valued, inspired, and at home. Our
                          why is simple: we’re here to bring people together. providing quality cuts and authentic
                          experiences that make everyone feel their best.
                      </p>


                  </div>
              </section>
          </div>
          <section>
              <HomeSocial/>
          </section>
      </section>
  );
};

export default About;
