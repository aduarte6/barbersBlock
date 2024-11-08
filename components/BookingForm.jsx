'use client';
import React from 'react';
import styles from '@/assets/styles/BookingForm.module.css';
import services from '@/services.json';

const BookingForm = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Book Your Service</h2>
            <p className={styles.intro}>
                Whether youre looking for a fresh fade, a classic cut , or a complete style refresh,
                we’ve got you covered. Choose a service, enter your info, and let our team handle the rest.
            </p>


            <form className={styles.form}>
                <label className={styles.label}>
                    Select a Service:
                    <select name="service" className={styles.select}>
                        <option value="">-- Choose a service --</option>
                        {services.map((service) => (
                            <option key={service._id} value={service.name}>
                                {service.name} - {service.price}
                            </option>
                        ))}
                    </select>
                </label>

                <label className={styles.label}>
                    Name:
                    <input type="text" name="name" className={styles.input} required/>
                </label>

                <label className={styles.label}>
                    Email:
                    <input type="email" name="email" className={styles.input} required/>
                </label>

                <label className={styles.label}>
                    Phone:
                    <input type="tel" name="phone" className={styles.input} required/>
                </label>

                <button type="button" className={styles.button}>
                    submit
                </button>
            </form>
        </div>
    );
};

export default BookingForm;
