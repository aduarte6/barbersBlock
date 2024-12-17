"use client";

import React from "react";
import "../assets/styles/global.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import outputs from "../amplify_outputs.json";



// Configure Amplify
Amplify.configure(outputs);

const MainLayout = ({ children }) => {
    return (
        <html lang="en">
        <body>
        <Authenticator.Provider>
            <Header />
            <main>{children}</main>
            <Footer />
        </Authenticator.Provider>
        </body>
        </html>
    );
};

export default MainLayout;
