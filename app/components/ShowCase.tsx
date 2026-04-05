"use client"
import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Card1 from "../../public/Card1.jpg"
import Card2 from "../../public/Card2.jpg"
import Card3 from "../../public/Card3.jpg"
import GlowButton from "./GlowButton"
import { useTheme } from "../context/ThemeContext"

gsap.registerPlugin(ScrollTrigger)

const ShowCase = () => {
  const { theme } = useTheme()
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  const images = [Card1, Card2, Card3]
  const title = [
    "Responsive Web Design",
    "Full-Stack Development",
    "Social Media Integration & SEO",
  ]
  const description = [
    "Create stunning websites that look perfect on any device, ensuring a seamless experience for your visitors on mobile, tablet, and desktop.",
    "Build robust and scalable web applications with complete front-end and back-end functionality, tailored to meet your business needs.",
    "Enhance your online presence by integrating social media platforms and optimizing your site for search engines, helping your business reach a wider audience.",
  ]

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      const direction = index % 2 === 0 ? -70 : 70

      gsap.fromTo(
        card,
        { x: direction, opacity: 0, y: 50 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
            pinSpacing: false,
          },
        },
      )
    })
  }, [])

  return (
    <section className='my-20 px-6 md:px-20'>
      <div className='text-center mb-12'>
        <h2
          className='
          text-4xl sm:text-5xl md:text-5xl font-extrabold 
          inline-block
          bg-linear-to-r from-[#08cb00] via-[#6be600] to-[#aaf420]
          text-transparent bg-clip-text 
        '>
          Our Key Services
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {images.map((src, index) => (
          <div
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el
            }}
            className={`border border-gray-700 shadow-lg rounded-lg p-6 sm:p-8 w-full 
                transition-transform duration-300 ease-out
                hover:scale-105 hover:shadow-2xl hover:-translate-y-2
                ${
                  theme === "light"
                    ? "hover:shadow-green-300"
                    : "hover:shadow-green-700/40"
                }`}>
            <Image
              src={src}
              alt={`Card ${index + 1}`}
              height={300}
              width={300}
              className='rounded-md mb-4 w-full h-[250px] sm:h-[300px] md:h-[350px] object-cover'
            />
            <h3 className='text-xl sm:text-2xl font-semibold mb-2'>
              {title[index]}
            </h3>
            <p className={`${theme !== "light" ? "text-gray-400" : ""}`}>
              {description[index]}
            </p>
            <div className='mt-5'>
              <GlowButton
                text='Look At Our Projects'
                link='https://muhtashim-portfolio.vercel.app/'
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ShowCase
