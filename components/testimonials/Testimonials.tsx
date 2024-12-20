"use client";

import React, { FC, useEffect, useState, MouseEventHandler } from "react";
import { motion } from "framer-motion";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";

interface Testimonial {
    tempId: number;
    testimonial: string;
    by: string;
    imgSrc: string;
}

interface TestimonialsProps {
    position: number;
    testimonial: Testimonial;
    handleMove: (position: number) => void;
    cardSize: number;
}

const CARD_SIZE_LG = 300;
const CARD_SIZE_SM = 270;

const BORDER_SIZE = 2;
const CORNER_CLIP = 50;
const CORNER_LINE_LEN = Math.sqrt(CORNER_CLIP * CORNER_CLIP + CORNER_CLIP * CORNER_CLIP);

const ROTATE_DEG = 2.5;

const STAGGER = 15;
const CENTER_STAGGER = -65;

const SECTION_HEIGHT = 500;
const TESTIMONIAL_DATA: Testimonial[] = [
    {
        tempId: 0,
        testimonial: "I always get the perfect fade every time. The tapers here are unmatched!",
        by: "Mike L.",
        imgSrc: "/imgs/barbers/1.jpg",
    },
    {
        tempId: 1,
        testimonial:
            "Booking an appointment is so easy with their online system. No more waiting on hold!",
        by: "Jessica K.",
        imgSrc: "/imgs/barbers/2.jpg",
    },
    {
        tempId: 2,
        testimonial:
            "Love the Southside vibe. It feels like a true part of our community.",
        by: "Tony S.",
        imgSrc: "/imgs/barbers/3.jpg",
    },
    {
        tempId: 3,
        testimonial:
            "Never miss a Chicago Bears game while getting my haircut. Great atmosphere!",
        by: "Michael M.",
        imgSrc: "/imgs/barbers/4.jpg",
    },
    {
        tempId: 4,
        testimonial: "The sports talk during the cut makes the time fly by. Always enjoyable!",
        by: "Derek P.",
        imgSrc: "/imgs/barbers/5.jpg",
    },
    {
        tempId: 5,
        testimonial:
            "My kids love coming here, Great barbers that keep them fresh weekly!",
        by: "Samantha R.",
        imgSrc: "/imgs/barbers/6.jpg",
    },
    {
        tempId: 6,
        testimonial:
            "Super clean shop and professional service every visit.",
        by: "Brian T.",
        imgSrc: "/imgs/barbers/7.jpg",
    },
    {
        tempId: 7,
        testimonial:
            "A father and son team who truly care about their clients. It feels personal.",
        by: "Carlos & Junior",
        imgSrc: "/imgs/barbers/8.jpg",
    },
    {
        tempId: 8,
        testimonial: "It's just the best barbershop in the neighborhood. Period.",
        by: "Emily G.",
        imgSrc: "/imgs/barbers/9.jpg",
    },
    {
        tempId: 9,
        testimonial: "I switched to this barbershop a year ago and never looked back.",
        by: "Frank H.",
        imgSrc: "/imgs/barbers/10.jpg",
    },
    {
        tempId: 10,
        testimonial:
            "I've been searching for a place like this for years. So glad I finally found it!",
        by: "Nina W.",
        imgSrc: "/imgs/barbers/11.jpg",
    },
    {
        tempId: 11,
        testimonial:
            "It's so simple to book and the staff made me feel right at home from the start.",
        by: "Gregory B.",
        imgSrc: "/imgs/barbers/12.jpg",
    },
];

const Testimonials: FC<TestimonialsProps> = ({ position, testimonial, handleMove, cardSize }) => {
    const isActive = position === 0;

    return (
        <motion.div
            initial={false}
            onClick={() => handleMove(position)}
            className={`
        rounded-lg absolute left-1/2 top-1/2 cursor-pointer border-[rgb(200,56,3);] p-8 text-white transition-colors duration-500 
        ${isActive ? "z-10 bg-orangeGradient backdrop-blur-[10px]" : "z-0 bg-navyGradient backdrop-blur-[10px] "}
      `}
            style={{
                borderWidth: BORDER_SIZE,
                clipPath: `polygon(${CORNER_CLIP}px 0%, calc(100% - ${CORNER_CLIP}px) 0%, 100% ${CORNER_CLIP}px, 100% 100%, calc(100% - ${CORNER_CLIP}px) 100%, ${CORNER_CLIP}px 100%, 0 100%, 0 0)`,
            }}
            animate={{
                width: cardSize,
                height: cardSize,
                x: `calc(-50% + ${position * (cardSize / 1.5)}px)`,
                y: `calc(-50% + ${
                    isActive ? CENTER_STAGGER : position % 2 ? STAGGER : -STAGGER
                }px)`,
                rotate: isActive ? 0 : position % 2 ? ROTATE_DEG : -ROTATE_DEG,
                boxShadow: isActive ? "0px 8px 0px 4px rgba(255,255,255,0)" : "0px 0px 0px 0px black",
            }}
            transition={{
                type: "spring",
                mass: 3,
                stiffness: 400,
                damping: 50,
            }}
        >
      <span
          className="absolute block origin-top-right rotate-45 bg-[rgb(200,56,3)] object-cover"
          style={{
              right: -BORDER_SIZE,
              top: CORNER_CLIP - BORDER_SIZE,
              width: CORNER_LINE_LEN,
              height: BORDER_SIZE,
          }}
      />
            {/* Using a regular img tag here for simplicity. If you prefer next/image, ensure the width/height are known. */}
            <img
                src={testimonial.imgSrc}
                alt={`Testimonial image for ${testimonial.by}`}
                className="mb-4 h-14 w-12 bg-[rgb(11,22,42)] object-cover object-top rounded-md"
                style={{
                    boxShadow: "3px 3px 0px chicagoOrange",

                }}
            />
            <h3
                className={`text-base sm:text-xl ${
                    isActive ? "text-white" : "text-white/60"
                }`}
            >
                &quot;{testimonial.testimonial}&quot;
            </h3>


            <div className="w-[100%] justify-left flex flex-row absolute bottom-[2rem] text-sm italic items-center">
                <div className={"z-10 w-1/2"}>
                    <p
                    className={` ${
                        isActive ? "text-white/60" : "text-white/40"
                    }`}
                >
                    - {testimonial.by}
                    </p>
                </div>
                <div className={" hidden w-[23rem] top-[-7em] left-[0] absolute"}>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 2000 2000"

                        >
                            <rect  />
                            <path  className={` ${
                                isActive ? "fill-chicagoOrange" : "fill-white/20"
                            }`}
                                d="M873.6,1660.7c104.7,0,190.3-81.8,196.5-184.9h-392.9c6.2,103.2,91.8,184.9,196.5,184.9Z"/>
                            <path
                                className={` ${
                                    isActive ? "fill-chicagoOrange" : "fill-white/20"
                                }`}
                                d="M873.6,354.9c-104.7,0-190.3,81.7-196.5,184.9h392.9c-6.2-103.2-91.8-184.9-196.5-184.9ZM798.9,510.9h-65.4c4.2-70.9,63.1-127.2,135.1-127.2s21.1,1.2,31,3.6c-53.6,14.7-94.4,63.5-100.8,123.6Z"/>
                            <path
                                className={` ${
                                    isActive ? "fill-chicagoOrange" : "fill-white/20"
                                }`}
                                d="M697.1,873.5l148.1-148.1c11.2-11.2,7.4-20.3-8.4-20.3h-131.3c-15.8,0-28.7,12.9-28.7,28.7v131.3c0,15.8,9.1,19.6,20.3,8.4Z"/>
                            <path
                                className={` ${
                                    isActive ? "fill-chicagoOrange" : "fill-white/20"
                                }`}
                                d="M676.8,1246.8c0,15.8,9.1,19.5,20.2,8.4l328.1-329.7c9.9-9.9,22.5-22.7,30.1-30.5.9-.9,1.8-1.8,2.7-2.7,6.2-6.3,6.7-7,1.8-2.1,6.1-8.2,10.8-25,10.8-39.5v-117c0-15.8-.7-28.7-1.5-28.7s-10.6,9.1-21.8,20.3l-350.1,350.1c-11.2,11.2-20.3,33.2-20.3,49v122.4Z"/>
                            <path
                                className={` ${
                                    isActive ? "fill-chicagoOrange" : "fill-white/20"
                                }`}
                                d="M1050,1102.3l-189.4,188.1c-11.2,11.1-7.5,20.2,8.3,20.2h172.7c15.8,0,28.7-12.9,28.7-28.7v-171.1c0-15.8-9.2-19.6-20.4-8.5Z"/>
                            <path
                                className={` ${
                                    isActive ? "fill-chicagoOrange" : "fill-white/20"
                                }`}
                                d="M1105.7,578.1h-469.5c-10.2,0-18.5,8.3-18.5,18.5v51.8c0,10.2,8.3,18.5,18.5,18.5h469.5c10.2,0,18.5-8.3,18.5-18.5v-51.8c0-10.2-8.3-18.5-18.5-18.5Z"/>
                            <path
                                className={` ${
                                    isActive ? "fill-chicagoOrange" : "fill-white/20"
                                }`}
                                d="M1105.7,1348.8h-469.5c-10.2,0-18.5,8.3-18.5,18.5v51.8c0,10.2,8.3,18.5,18.5,18.5h469.5c10.2,0,18.5-8.3,18.5-18.5v-51.8c0-10.2-8.3-18.5-18.5-18.5Z"/>
                        </svg>
                    </div>
                <div className={" z-0 w-[23rem] top-[-2em] left-[7rem] absolute"}>
                    <Image
                        alt="barber clippers"
                        src="/images/home/clippers.webp"
                        width={200}
                        height={200}
                    />

                </div>

            </div>


        </motion.div>
    );
};


const StaggerTestimonials: FC = () => {
    const [cardSize, setCardSize] = useState(CARD_SIZE_LG);
    const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIAL_DATA);

    const handleMove = (position: number): void => {
        const copy = [...testimonials];

        if (position > 0) {
            for (let i = position; i > 0; i--) {
                const firstEl = copy.shift();

                if (!firstEl) return;
                copy.push({...firstEl, tempId: Math.random()});
            }
        } else {
            for (let i = position; i < 0; i++) {
                const lastEl = copy.pop();

                if (!lastEl) return;
                copy.unshift({...lastEl, tempId: Math.random()});
            }
        }

        setTestimonials(copy);
    };

    useEffect(() => {
        const {matches} = window.matchMedia("(min-width: 640px)");

        setCardSize(matches ? CARD_SIZE_LG : CARD_SIZE_SM);

        const handleSetCardSize = () => {
            const {matches} = window.matchMedia("(min-width: 640px)");
            setCardSize(matches ? CARD_SIZE_LG : CARD_SIZE_SM);
        };

        window.addEventListener("resize", handleSetCardSize);

        return () => {
            window.removeEventListener("resize", handleSetCardSize);
        };
    }, []);

    // Add swipe handling
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleMove(1),  // Move cards to the left
        onSwipedRight: () => handleMove(-1), // Move cards to the right
        trackMouse: true, // Allow swiping with mouse drag
    });

    return (
        <div
            {...swipeHandlers}
            className="relative w-full overflow-hidden"
            style={{
                height: SECTION_HEIGHT,
            }}
        >
            {testimonials.map((t, idx) => {
                let position = 0;

                if (testimonials.length % 2) {
                    position = idx - (testimonials.length + 1) / 2;
                } else {
                    position = idx - testimonials.length / 2;
                }

                return (
                    <Testimonials
                        key={t.tempId}
                        testimonial={t}
                        handleMove={handleMove}
                        position={position}
                        cardSize={cardSize}
                    />
                );
            })}
            <div className=" hidden absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-8">
                <button
                    onClick={() => handleMove(-1)}
                    className="grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-black hover:text-white"
                    type="button"
                >
                    <GoArrowLeft/>
                </button>
                <button
                    onClick={() => handleMove(1)}
                    className="grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-black hover:text-white"
                    type="button"
                >
                    <GoArrowRight/>
                </button>
            </div>
        </div>
    );
};

export default StaggerTestimonials;