import { ChevronRight } from "lucide-react"
import Link from "next/link"
import React from "react"

const GlowButton = ({ text, link }: { text: string; link: string }) => {
  return (
    <Link
      href={link}
      className='
        relative px-8 py-3 text-white font-semibold rounded-full 
        bg-gradient-to-r from-[#08cb00] via-[#6be600] to-[#aaf420]
        shadow-[0_0_15px_rgba(8,203,0,0.6)]
        inline-block transition-all duration-500
        hover:shadow-[0_0_30px_rgba(170,244,32,0.9)]
        hover:scale-105
        before:absolute before:inset-0 before:rounded-full
        before:bg-gradient-to-r before:from-[#08cb00] before:via-[#6be600] before:to-[#aaf420]
        before:blur-xl before:opacity-60 before:animate-pulse
      '>
      <span className='relative z-10 flex items-center gap-1'>
        {text} <ChevronRight />
      </span>
    </Link>
  )
}

export default GlowButton
