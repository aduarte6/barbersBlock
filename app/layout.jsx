import React from 'react';
import "@/assets/styles/global.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata ={
    title: "Barbers Block | Chicago",
    description: "Chicago Barbershop and Where Barbers Connect ",
    keywords:"clippers, barber, haricut, fade, line, chicago,"
}

const MainLayout = ({children}) => {
  return (
<html lang="en">
<body>
<Header/>
<main>
    {children}
</main>
<Footer/>
</body>
</html>
  );
};

export default MainLayout;
