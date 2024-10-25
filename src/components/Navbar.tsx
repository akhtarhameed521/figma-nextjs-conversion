"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" relative w-full p-5 ">
      <div className=" max-w-6xl mx-auto">
        
        {/* Hamburger icon for mobile screens */}
        <div className="lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex lg:justify-end gap-5 font-bold">
          <Link href="/">Home</Link>
          <Link href="/work">Work</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col  gap-5 font-bold mt-4 p-5 bg-red-200 justify-end  items-center rounded-md">
          <Link href="/" onClick={toggleMenu}>Home</Link>
          <Link href="/work" onClick={toggleMenu}>Work</Link>
          <Link href="/blog" onClick={toggleMenu}>Blog</Link>
          <Link href="/contact" onClick={toggleMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
