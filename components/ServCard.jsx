import React from 'react';
import styles from '@/assets/styles/ServCard.module.css';

const ServCard = ({ name, description, price, features }) => {
    return (
        <div className={styles.serviceCard}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>Price: {price}</p>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>
        </div>
    );
};

export default ServCard;
