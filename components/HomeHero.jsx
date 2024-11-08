import React from 'react';
import styles from '@/assets/styles/HomeHero.module.css';
import Image from 'next/image';

const HomeHero = () => {
    return (
        <div className={styles.heroContainer}>
            <Image
                className={styles.heroImage}
                src="/images/home/homeHero.webp"
                alt="https://stock.adobe.com/search/images?filters%5Bcontent_type%3Aphoto%5D=1&filters%5Bcontent_type%3Aillustration%5D=1&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=0&filters%5Bcontent_type%3Atemplate%5D=0&filters%5Bcontent_type%3A3d%5D=0&filters%5Bcontent_type%3Aaudio%5D=0&filters%5Binclude_stock_enterprise%5D=0&filters%5Bcontent_type%3Aimage%5D=1&k=barbershop&order=relevance&price%5B%24%5D=1&limit=100&search_type=filter-select&search_page=1&color=%23F58318&get_facets=1&asset_id=781453471"
                width={1800}
                height={800}
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
