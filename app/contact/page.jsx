import React from 'react';
import styles from '@/assets/styles/ContactPage.module.css';
import ContactForm from "@/components/ContactForm";

const page = () => {
    return (
        <div className={styles.container}>
            <section className={styles.formSection}>
                <h2>Contact Us</h2>
                <p>Have a question or need to book an appointment? Fill out the form below, and we'll get back to you as
                    soon as we can.</p>
                <ContactForm/>
            </section>


            <section className={styles.row}>
                <div className={styles.section}>
                    <h3>Press & Media</h3>
                    <p>We’re excited to work with journalists and bloggers. If you’d like to feature Da Barbers Block,
                        we’ve got resources ready for you.</p>
                    <p>For press inquiries, email us at press@barbersblock.com.</p>
                </div>

                <div className={styles.section}>
                    <h3>Community Engagement</h3>
                    <p>We’re committed to supporting our community through events and charity work.</p>
                    <p>Know a cause we should support? Reach out at community@barbersblock.com.</p>
                </div>
            </section>
        </div>
    );
};

export default page;
