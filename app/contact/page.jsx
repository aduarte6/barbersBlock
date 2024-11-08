import React from 'react';
import styles from '@/assets/styles/ContactPage.module.css';
import ContactForm from "@/components/ContactForm";

export const metadata = {
    title: "Contact | Barbers Block",
    description: "Send us a message about inquiries.",
    keywords: "contact, inquiries, message, support,",
};

const page = () => {
    return (
        <div className={styles.container}>
            <section className={styles.formSection}>
                <h2>Contact Us</h2>
                <p>Have questions or want to share a review with us? Fill out the form below, and we'll get back to you as
                    soon as we can. Thank you!</p>
                <ContactForm/>
            </section>


            <section className={styles.row}>
                <div className={styles.section}>
                    <h3>Press & Media</h3>
                    <p>We’re excited to work with journalists, influencers and bloggers. If you would like to feature Barbers Block,
                        we’ve got resources ready for you.</p>
                    <p>For press inquiries, email us at press@barbersblock.com.</p>
                </div>

                <div className={styles.section}>
                    <h3>Community Engagement</h3>
                    <p>We are committed to supporting our community through events and charity work.</p>
                    <p>Know a cause we should support? Reach out at community@barbersblock.com.</p>
                </div>
            </section>
        </div>
    );
};

export default page;
