import React from 'react';
import styles from '@/assets/styles/BookingPage.module.css';
import HomeSocial from "@/components/HomeSocial";
import BookingForm from "@/components/BookingForm";

export const metadata = {
    title: "Book Now | Barbers Block",
    description: "Book Now with our experience barbers.",
    keywords: "contact, appointment, fade, barbers,",
};

const page = () => {
    return (
        <div>
        <div className={styles.parent}>
            <BookingForm />


            <section className={styles.bookingText}>
                <div>
                    <h3>Cancellation Policy</h3>
                    <p>
                        We understand that plans can change, which is why we offer a flexible cancellation policy.
                        If you need to reschedule or cancel, just let us at least 4 hours in advance. This
                        lets us accommodate other clients and continue providing timely services.
                    </p>
                </div>

                <div>
                    <h3>Members Save!</h3>
                    <p>
                        Ask about our haircut Membership. Enjoy weekly curs at discounted rates, priority booking,
                        and special offers just for members only. Plus receive free shape ups between appointments to keep
                        your look fresh longer. It’s the best way to stay fresh and save money.
                    </p>
                </div>
            </section>


        </div>
    <HomeSocial />
    </div>
    );
};

export default page;
