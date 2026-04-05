"use client"
import Image from "next/image"
import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ChevronDownIcon, Moon, Sun, Menu, X } from "lucide-react"
import GlowButton from "./GlowButton"
import { gsap } from "gsap"
import Logo from "../../public/code_fluxion_logo_cropped.png"

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement | null>(null)

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen)
  }

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (mobileOpen) {
        gsap.to(mobileMenuRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        })
      } else {
        gsap.to(mobileMenuRef.current, {
          x: "100%",
          opacity: 0,
          duration: 0.5,
          ease: "power3.in",
        })
      }
    }
  }, [mobileOpen])

  return (
    <nav
      className={`w-full flex bg-black border-b border-green-500 justify-between items-center px-6 md:px-20 py-4 fixed top-0 z-50 shadow-md`}>
      {/* Logo */}
      <div>
        {/* <Link href={"/"} className='flex items-center'>
          {theme === "light" ? (
            <Image src='' alt='Logo' width={105} height={25} />
          ) : (
            <Image src='/DarkLogo.jpg' alt='Dark Logo' width={85} height={25} />
          )}
        </Link> */}
        <Link href='/'>
          <Image src={Logo} alt='Code Fluxion Logo' width={200} />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className='hidden md:flex items-center gap-6 relative'>
        {/* About Dropdown */}
        <div className='relative group'>
          <Link href={'/about-agency'} className='font-semibold flex items-center gap-1 hover:underline transition-all'>
            About Us
          </Link> 
        </div>

        <Link
          href='/services'
          className='font-semibold hover:underline transition-all'>
          Services
        </Link>
        <Link
          href='/testimonials'
          className='font-semibold hover:underline transition-all'>
          Testimonials
        </Link>

        <GlowButton text='Contact Us' link='/contact' />
      </div>

      {/* Mobile Burger */}
      <div className='md:hidden flex items-center gap-4'>
        <button onClick={toggleMobileMenu}>
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-3/4 md:hidden shadow-lg p-6 flex flex-col gap-6 z-40 transform translate-x-full opacity-0`}>
        {/* Close Button inside menu */}
        <button className='self-end mb-6' onClick={toggleMobileMenu}>
          <X size={30} />
        </button>

        {/* Mobile Links */}
        <div className='flex flex-col gap-4'>
          <Link href='/about-agency' onClick={() => setMobileOpen(false)}>
            About Agency
          </Link>
          <Link href='/about-me' onClick={() => setMobileOpen(false)}>
            About CEO
          </Link>
          <Link href='/services' onClick={() => setMobileOpen(false)}>
            Services
          </Link>
          <Link href='/portfolio' onClick={() => setMobileOpen(false)}>
            Portfolio
          </Link>
          <Link href='/testimonials' onClick={() => setMobileOpen(false)}>
            Testimonials
          </Link>
          <div>
            <GlowButton text='Contact Us' link='/contact' />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
