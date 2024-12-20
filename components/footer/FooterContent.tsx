import Link from "next/link";
import React from "react";
import styles from "@/assets/styles/Header.module.css";
import Image from "next/image";

const FooterContent = () => {
    const currentYear = new Date().getFullYear();

    return (

        <div className="bg-chicagoOrange h-[8rem] ">

                <div className="flex justify-center m-auto my-0">
                    <Link href="/">
                        <div className={styles.navLogoTitle}>
                            <div className={styles.navDa}>Da</div>
                            <div className={styles.navBarberBlock}>
                                <div>Barbers</div>
                                <div>Block</div>
                            </div>
                        </div>
                    </Link>
                </div>
            <div className="">
                <div className="bg-chicagoOrange">
                    <p className="w-full flex justify-center m-auto text-white/40">
                        © {currentYear} Barbers Block. All rights reserved.
                    </p>

                </div>


            </div>

            <section>
                <a className=" items-baseline rounded-tl-lg rounded-tr-lg flex flex-row gap-1 px-4 py-2 bg-chicagoNavy absolute bottom-0 right-0" href="https://cartica.co">
                    <span className="text-white text-[0.7rem]">Powered by</span>
                    <span>
                        <Image
                            alt="Cartica Web Agency"
                            src="/images/home/cartica.svg"
                            width={65}
                            height={65}
                            />
                    </span>
                </a>
            </section>
        </div>
    );
};

export default FooterContent;


