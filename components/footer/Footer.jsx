import React from 'react';
import styles from '../../assets/styles/Footer.module.css';
import Link from 'next/link';
import FooterContent from './FooterContent';
import Image from "next/image";

const Footer = () => {
    return (
        <section className=" relative overflow-hidden">
            <div>

                <div className=" z-10 w-[30rem] bottom-[-15rem] left-[-8rem] absolute">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 2000 2000"

                    >
                        <rect/>
                        <path         className="fill-[rgba(173,47,0,0.44)]"
                              d="M873.6,1660.7c104.7,0,190.3-81.8,196.5-184.9h-392.9c6.2,103.2,91.8,184.9,196.5,184.9Z"/>
                        <path
                            className="fill-[rgba(173,47,0,0.44)]"
                            d="M873.6,354.9c-104.7,0-190.3,81.7-196.5,184.9h392.9c-6.2-103.2-91.8-184.9-196.5-184.9ZM798.9,510.9h-65.4c4.2-70.9,63.1-127.2,135.1-127.2s21.1,1.2,31,3.6c-53.6,14.7-94.4,63.5-100.8,123.6Z"/>
                        <path
                            className="fill-[rgba(173,47,0,0.44)]"
                            d="M697.1,873.5l148.1-148.1c11.2-11.2,7.4-20.3-8.4-20.3h-131.3c-15.8,0-28.7,12.9-28.7,28.7v131.3c0,15.8,9.1,19.6,20.3,8.4Z"/>
                        <path
                            className="fill-[rgba(173,47,0,0.44)]"
                            d="M676.8,1246.8c0,15.8,9.1,19.5,20.2,8.4l328.1-329.7c9.9-9.9,22.5-22.7,30.1-30.5.9-.9,1.8-1.8,2.7-2.7,6.2-6.3,6.7-7,1.8-2.1,6.1-8.2,10.8-25,10.8-39.5v-117c0-15.8-.7-28.7-1.5-28.7s-10.6,9.1-21.8,20.3l-350.1,350.1c-11.2,11.2-20.3,33.2-20.3,49v122.4Z"/>
                        <path
                            className="fill-[rgba(173,47,0,0.44)]"
                            d="M1050,1102.3l-189.4,188.1c-11.2,11.1-7.5,20.2,8.3,20.2h172.7c15.8,0,28.7-12.9,28.7-28.7v-171.1c0-15.8-9.2-19.6-20.4-8.5Z"/>
                        <path
                            className="fill-[rgba(173,47,0,0.44)]"
                            d="M1105.7,578.1h-469.5c-10.2,0-18.5,8.3-18.5,18.5v51.8c0,10.2,8.3,18.5,18.5,18.5h469.5c10.2,0,18.5-8.3,18.5-18.5v-51.8c0-10.2-8.3-18.5-18.5-18.5Z"/>
                        <path
                            className="fill-[rgba(173,47,0,0.44)]"
                            d="M1105.7,1348.8h-469.5c-10.2,0-18.5,8.3-18.5,18.5v51.8c0,10.2,8.3,18.5,18.5,18.5h469.5c10.2,0,18.5-8.3,18.5-18.5v-51.8c0-10.2-8.3-18.5-18.5-18.5Z"/>
                    </svg>
                </div>

            </div>
            <div>

            </div>
            <div className={styles.clip}></div>

            <FooterContent/>

        </section>
    );
};

export default Footer;
