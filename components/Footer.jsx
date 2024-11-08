import React from 'react';
import styles from '@/assets/styles/Footer.module.css';

const Footer = () => {
    return (
        <section className={styles.container}>
            <div className={styles.clip}></div>

            <div className={styles.footer}>
                <div className={styles.llc}>
                    &copy; Barbers Block LLC 2024
                </div>
                <div className={styles.row}>
                    <div className={styles.mission}>
                        <p>
                            At Barbers Block, our mission is to uplift every client with with quality cuts. We know a haircut can
                            transcend a persons confidence. We believe in making everyone look and feel their best, one cut at
                            a time.
                        </p>
                    </div>

                    <div className={styles.bookNowSection}>
                        <p className={styles.bookText}>Ready for a fresh look? Book your appointment today!</p>
                        <button className={styles.bookButton}>Book Now</button>
                    </div>
                </div>


            </div>

            {/*<div className={styles.powerBy}>*/}
            {/*    <p>Powered By Anton</p>*/}
            {/*</div>*/}
        </section>
    );
};

export default Footer;
