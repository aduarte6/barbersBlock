import React from 'react';
import About from '@/components/About';

export const metadata = {
    title: "About | Barbers Block",
    description: "Learn more about Barbers Block and our team of skilled barbers in Chicago.",
    keywords: "about,about us, barber, team, Chicago, barbershop",
};

const page = () => {



    return (
    <div>
      <About/>
    </div>
  );
};

export default page;
