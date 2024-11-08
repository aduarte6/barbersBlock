import React from 'react';
import styles from '@/assets/styles/HomeHero.module.css';
import Image from 'next/image';

const HomeHero = () => {
    return (
        <div className={styles.heroContainer}>
            <Image
                className={styles.heroImage}
                src="/images/home/homeHero2.jpg"
                alt="https://unsplash.com/photos/black-wooden-stars-with-road-signage-on-each-steps-B0butg0XCD4"
                width={2400}
                height={1200}
            />
            <div className={styles.textContainer}>
                <div className={styles.heroContent}>
                    <p>Your Block</p>
                    <p>Your Barbers</p>
                </div>
                <div className={styles.buttonDiv}>
                    <button className={styles.heroButton}>Book Now</button>
                </div>

            </div>

        </div>
    );
};

export default HomeHero;
