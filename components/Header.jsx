"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import styles from '@/assets/styles/Header.module.css';
import NavBanner from "@/components/NavBanner";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <nav className=" relative flex">

                {/* Logo Section */}
                <Link href="/">
                    <div className={styles.navLogoTitle}>
                        <div className={styles.navDa}>Da</div>
                        <div className={styles.navBarberBlock}>
                            <div>Barbers</div>
                            <div>Block</div>
                        </div>
                    </div>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="md:hidden p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                    >
                        <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex space-x-4 pr-8">
                    <Link href="/" className="text-white hover:bg-gray-900 rounded-md px-3 py-2">
                        Home
                    </Link>

                    <Link href="/services" className="text-white hover:bg-gray-900 rounded-md px-3 py-2">
                        Services
                    </Link>
                    <Link href="/about" className="text-white hover:bg-gray-900 rounded-md px-3 py-2">
                        About
                    </Link>
                    <Link href="/booking" className="text-white hover:bg-gray-900 rounded-md px-3 py-2">
                        Booking
                    </Link>
                    <Link href="/contact" className="text-white hover:bg-gray-900 rounded-md px-3 py-2">
                        Contact
                    </Link>

                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="px-2 pb-3 pt-2 md:hidden bg-links-900">
                    <Link href="/" className=" text-center block text-white hover:bg-gray-900 rounded-md px-3 py-2">
                        Home
                    </Link>
                    <Link href="/services" className=" text-center block text-white hover:bg-gray-900 rounded-md px-3 py-2">
                        Services
                    </Link>
                    <Link href="/about" className=" text-center block text-white hover:bg-gray-900 rounded-md px-3 py-2">
                        About
                    </Link>
                    <Link href="/booking" className=" text-center block text-white hover:bg-gray-900 rounded-md px-3 py-2">
                        Booking
                    </Link>
                    <Link href="/contact" className=" text-center block text-white hover:bg-gray-900 rounded-md px-3 py-2">
                        Contact
                    </Link>

                </div>
            )}
            <NavBanner/>
        </header>
    );
};

export default Header;
