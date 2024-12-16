import React from 'react';
import Image from 'next/image';
import services from '@/services.json';
import ServCard from '@/components/ServCard';
import styles from "@/assets/styles/ServHero.module.css";

const ServHero = () => {
    const adultServices = services.filter(service => service.type === "adult");
    const kidServices = services.filter(service => service.type === "kid");

    return (
        <section>
            <section>
                <Image
                    className={styles.servHeaderImage}
                    src="/images/services/servHeaderImage.jpg"
                    alt="Service Header"
                    width={1200}
                    height={800}
                />
            </section>

            <section className={styles.categorySectionParent}>
                <h2>Adult Cuts</h2>
                <div className={styles.category}>
                    {adultServices.map((service) => (
                        <ServCard
                            key={service._id}
                            name={service.name}
                            description={service.description}
                            price={service.price}
                            features={service.features}
                        />
                    ))}
                </div>
            </section>


            <section className={styles.categorySectionParent}>
                <h2>Kid Cuts</h2>
                <div className={styles.category}>
                    {kidServices.map((service) => (
                        <ServCard
                            key={service._id}
                            name={service.name}
                            description={service.description}
                            price={service.price}
                            features={service.features}
                        />
                    ))}
                </div>
            </section>
            <section className={styles.bookingSection}>
                <h3>Booking Process</h3>
                <p>
                    Booking with us is easy! Just head to our bookin page, pick the service you want and select a time
                    that works for you. Once you confirm, you’ll get a text with all the details. We suggest booking early
                    to lock in your spot, especially during busy hours!
                </p>
            </section>


        </section>
    );
};

export default ServHero;
