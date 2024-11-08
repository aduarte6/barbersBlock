import React from 'react';
import styles from '@/assets/styles/ContactForm.module.css';

const ContactForm = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <label className={styles.label}>
                    Name:
                    <input type="text" name="name" className={styles.input} />
                </label>

                <label className={styles.label}>
                    Email:
                    <input type="email" name="email" className={styles.input}  />
                </label>

                <label className={styles.label}>
                    Subject:
                    <input type="text" name="subject" className={styles.input} />
                </label>

                <label className={styles.label}>
                    Message:
                    <textarea name="message" className={styles.textarea} ></textarea>
                </label>

                <button type="submit" className={styles.button}>submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
