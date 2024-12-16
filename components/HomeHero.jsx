import React from 'react';
import styles from '@/assets/styles/HomeHero.module.css';
import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '@/public/images/home/barberblockHero.webp';

const HomeHero = () => {
    return (
        <div className={styles.heroContainer}>
            <Image
                className={styles.heroImage}
                src={HeroImage}
                alt="https://unsplash.com/photos/black-wooden-stars-with-road-signage-on-each-steps-B0butg0XCD4"
                width={2400}
                height={2400}
            />
            <div className={styles.textContainer}>
                <div className={styles.heroContent}>
                    <p>Your Block</p>
                    <p>Your Barbers</p>
                </div>
                <div className={styles.buttonDiv}>
                    <Link href="/booking">
                        <button className={styles.heroButton}>
                            Book Now
                        </button>

                    </Link>
                </div>

            </div>

        </div>
    );
};

export default HomeHero;
