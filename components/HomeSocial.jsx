import React from 'react';
import Image from 'next/image';
import styles from '@/assets/styles/HomeSocial.module.css';
import images from '@/socialmedia.json';

const HomeSocial = () => {

    return (
<>
        <section className={styles.secHeader}>
            <h1>Follow us on social media!</h1>
            <p>
                Stay connected and follow us on social media for the latest updates, styles, and special offers! Join
                our community and be the first to see what’s happening at Da Barbers Block. We look forward to
                welcoming you!
            </p>
        </section>
    <section className={styles.container}>
        {images.map((image, index) => (
            <div key={index} className={styles.imageContainer}>
                <Image
                    src={`/images/home/${image.src}`}
                    alt={image.description}
                    width={1200}
                    height={800}
                    sizes="100vw"
                        className={styles.socialImage}
                    />
                    <div className={styles.description}>
                        <a href={image.description} target="_blank" rel="noopener noreferrer">
                            {image.description}
                        </a>
                    </div>
                </div>
            ))}
        </section>

    </>
    );
};

export default HomeSocial;
