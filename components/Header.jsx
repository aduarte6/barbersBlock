"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { fetchUserAttributes } from "aws-amplify/auth";
import styles from "../assets/styles/Header.module.css";
import NavBanner from "../components/NavBanner";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [name, setName] = useState(null); // Use plain JS (no TypeScript)
    const router = useRouter();
    const { user, signOut } = useAuthenticator((context) => [context.user]);
    const handleSignOut = () => {
        signOut(); // Assuming this clears session/auth

    };
    useEffect(() => {
        const getName = async () => {
            try {
                if (user) {
                    const attributes = await fetchUserAttributes();
                    setName(attributes.name || "Guest");
                }
            } catch (error) {
                console.error("Error fetching name attribute:", error);
                setName("Guest");
            }
        };

        getName();
    }, [user]);

    return (
        <header className={styles.header}>
            <nav className="relative flex">
                <Link href="/">
                    <div className={styles.navLogoTitle}>
                        <div className={styles.navDa}>Da</div>
                        <div className={styles.navBarberBlock}>
                            <div>Barbers</div>
                            <div>Block</div>
                        </div>
                    </div>
                </Link>

                {/* Desktop Menu */}
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
                    {/*<Link href="/booking" className="text-white hover:bg-gray-900 rounded-md px-3 py-2">*/}
                    {/*    Booking*/}
                    {/*</Link>*/}
                    <Link href="/contact" className="text-white hover:bg-gray-900 rounded-md px-3 py-2">
                        Contact
                    </Link>

                    {/* Auth Buttons */}
                    {user ? (
                        <>
                            <Link href="/auth" className="text-white hover:bg-gray-900 rounded-md px-3 py-2">
                                <span className="text-white">Book now</span>
                            </Link>

                            <Link href="/"
                                onClick={handleSignOut}
                                className="text-white hover:bg-red-500 px-3 py-2"
                            >
                                Sign Out
                            </Link>
                        </>
                    ) : (

                        <Link href="/auth"
                              onClick={() => router.push("/auth")}
                              className="text-white hover:bg-gray-900 rounded-md px-3 py-2">
                            Sign In
                        </Link>

                    )}
                </div>
            </nav>

            <NavBanner />
        </header>
    );
};

export default Header;
