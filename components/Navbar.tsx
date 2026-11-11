"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/About", label: "About us" },
  { href: "/subscribe", label: "Create your plan" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
  <header className="relative mx-auto max-w-[1280px] px-6 py-6 md:h-[113px] md:py-0 xl:px-0">
    <div className="flex items-center justify-between md:h-full">
      <Link href="/" onClick={() => setOpen(false)}>
        <Image
          src="/images/logo.svg"
          alt="Coffeeroasters"
          width={236}
          height={26}
          priority
          className="h-auto w-40 md:w-[236px]"
        />
      </Link>

      {/* desktop + tablet */}
      <nav className="hidden md:block">
        <ul className="flex gap-8 text-xs font-bold uppercase tracking-widest text-grey lg:gap-10 lg:text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:text-blue-dark">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* button burger ( mobile ) */}
      <button
        type="button"
        className="md:hidden"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" className="text-blue-dark">
          {open ? (
            <path d="M2 2l16 16M18 2L2 18" stroke="currentColor" strokeWidth="2" />
          ) : (
            <path d="M0 4h20M0 10h20M0 16h20" stroke="currentColor" strokeWidth="2" />
          )}
        </svg>
      </button>
    </div>

    {/* dropdown menu ( mobile )*/}
    {open && (
      <nav className="absolute inset-x-0 top-full z-20 bg-cream px-6 pb-12 pt-8 shadow-lg md:hidden">
        <ul className="flex flex-col items-center gap-8 font-title text-2xl font-black text-blue-dark">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )}
  </header>
);
}