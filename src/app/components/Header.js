"use client";

import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/app/assets/images/logo.png";
import Bar from "@/app/assets/images/navbar.svg";
import Close from "@/app/assets/images/close.svg";
import "./css/header.css";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);
  const pathname = usePathname();
  return (
    <header className="w-full relative h-14 bg-stone-900 flex justify-between items-center px-16 max-sm:justify-center">
      <Image 
        src={LogoImage}
        quality={100}
        alt="Logo"
        className="w-16 ml-5 h-12 z-50"
      />
      <nav
        className={`w-2/5 flex justify-around text-sky-600 text-lg font-sans max-sm:absolute max-sm:w-screen max-sm:bg-stone-900/95 z-20 max-sm:flex-col max-sm:justify-around top-14 max-sm:h-56 transition-all duration-500 ease-in-out max-sm:items-center ${
          isOpen
            ? "max-sm:h-56 max-sm:opacity-100"
            : "max-sm:h-1 max-sm:opacity-0"
        }`}
      >
        <Link id="home" className="navLink" href="/">
          <div
            className={`${
              pathname !== "/" ? "underLine" : null
            } size-full absolute border-b-2 border-b-sky-800`}
          ></div>
          Home
        </Link>
        <Link id="about" className="navLink" href="/about">
          <div
            className={`${
              pathname !== "/about" ? "underLine" : null
            } size-full absolute border-b-2 border-b-sky-800`}
          ></div>
          About
        </Link>
        <Link id="shop" className="navLink" href="/shop">
          <div
            className={`${
              pathname !== "/shop" ? "underLine" : null
            } size-full absolute border-b-2 border-b-sky-800`}
          ></div>
          Shop
        </Link>
        <Link id="contact" className="navLink" href="/contact">
          <div
            className={`${
              pathname !== "/contact" ? "underLine" : null
            } size-full absolute border-b-2 border-b-sky-800`}
          ></div>
          Contact
        </Link>
      </nav>
      <Image alt="image"
        src={isOpen ? Close : Bar}
        className="w-8 h-8 z-30 absolute right-2 sm:hidden"
        onClick={() => setisOpen(!isOpen)}
      />
    </header>
  );
};

export default Header;
