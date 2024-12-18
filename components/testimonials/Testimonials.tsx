"use client";

import React, { FC, useEffect, useState, MouseEventHandler } from "react";
import { motion } from "framer-motion";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useSwipeable } from "react-swipeable";


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

const CARD_SIZE_LG = 365;
const CARD_SIZE_SM = 290;

const BORDER_SIZE = 2;
const CORNER_CLIP = 50;
const CORNER_LINE_LEN = Math.sqrt(CORNER_CLIP * CORNER_CLIP + CORNER_CLIP * CORNER_CLIP);

const ROTATE_DEG = 2.5;

const STAGGER = 15;
const CENTER_STAGGER = -65;

const SECTION_HEIGHT = 600;
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
        by: "Laura M.",
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
            "They’re fantastic with my kids. I can get my haircut while they entertain them.",
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
        absolute left-1/2 top-1/2 cursor-pointer border-black p-8 text-black transition-colors duration-500 
        ${isActive ? "z-10 bg-white " : "z-0 bg-[rgb(11,22,42)] "}
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
                boxShadow: isActive ? "0px 8px 0px 4px black" : "0px 0px 0px 0px black",
            }}
            transition={{
                type: "spring",
                mass: 3,
                stiffness: 400,
                damping: 50,
            }}
        >
      <span
          className="absolute block origin-top-right rotate-45 bg-black object-cover"
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
                className="mb-4 h-14 w-12 bg-neutral-600 object-cover object-top"
                style={{
                    boxShadow: "3px 3px 0px white",

                }}
            />
            <h3
                className={`text-base sm:text-xl ${
                    isActive ? "text-black" : "text-white"
                }`}
            >
                &quot;{testimonial.testimonial}&quot;
            </h3>
            <p
                className={`absolute bottom-8 left-8 right-8 mt-2 text-sm italic ${
                    isActive ? "text-indigo-200" : "text-neutral-700"
                }`}
            >
                - {testimonial.by}
            </p>
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
                copy.push({ ...firstEl, tempId: Math.random() });
            }
        } else {
            for (let i = position; i < 0; i++) {
                const lastEl = copy.pop();

                if (!lastEl) return;
                copy.unshift({ ...lastEl, tempId: Math.random() });
            }
        }

        setTestimonials(copy);
    };

    useEffect(() => {
        const { matches } = window.matchMedia("(min-width: 640px)");

        setCardSize(matches ? CARD_SIZE_LG : CARD_SIZE_SM);

        const handleSetCardSize = () => {
            const { matches } = window.matchMedia("(min-width: 640px)");
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
            className="relative w-full overflow-hidden bg-white"
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
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-8">
                <button
                    onClick={() => handleMove(-1)}
                    className="grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-black hover:text-white"
                    type="button"
                >
                    <GoArrowLeft />
                </button>
                <button
                    onClick={() => handleMove(1)}
                    className="grid h-14 w-14 place-content-center text-3xl transition-colors hover:bg-black hover:text-white"
                    type="button"
                >
                    <GoArrowRight />
                </button>
            </div>
        </div>
    );
};

export default StaggerTestimonials;