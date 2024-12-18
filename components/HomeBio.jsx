
import React from 'react';
import styles from '@/assets/styles/HomeBio.module.css'
import Image from 'next/image'


const HomeBio = () => {
  return (
      <section className=" relative max-w-screen-xl m-auto justify-center">
          <div className="w-full flex flex-col gap-4 mt-8 px-8">
              <div className="max-w-[3em] text-[clamp(4rem,5vw,5em)] font-[900] text-chicagoOrange leading-none">

                  <p>Chicago&apos;s Newest Barbershop</p>
              </div>
              <div className='font-[200] text-[1.2rem] max-w-[20em]'>
                  <p>
                      Barbers Block is dedicated to serving our community with a blend of style, quality,
                      and authenticity. Whether you’re looking for a fresh cut, a classic style, or something
                      bold and new, we aim to make each visit more than just a haircut. it’s an experience
                      crafted just for you.
                  </p>
                  {/*<p>*/}
                  {/*    With location throughout Chicago, we pride ourselves on being more than just a*/}
                  {/*    barbershop. We`&apos;`re a part of your block, a place where everyone has space, stories are shared,*/}
                  {/*    and connections are made. Our skilled barbers bring unmatched expertise to every cut,*/}
                  {/*    treating all clients with care and attention to detail. From the latest trend to timeless*/}
                  {/*    classics. we have the skills to make your vision a reality.*/}
                  {/*</p>*/}


              </div>

          </div>
          <div className="w-full absolute right-[0] top-0 max-w-[clamp(25em,50vw,50em)]">
              <Image  className="w-full max-w-[50em] blur-[6px] opacity-[0.4]" src="/images/home/chicagoout.webp" alt="https://stock.adobe.com/images/chicago/431255482?prev_url=detail" width={100} height={800} />

          </div>
          {/*<div className={styles.bioClip}></div>*/}
      </section>
  );
};

export default HomeBio;
