import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/About", label: "About us" },
  { href: "/subscribe", label: "Create your plan" },
];

const socials = [
  { src: "/images/facebook.svg", label: "Facebook", href: "#" },
  { src: "/images/twitter.svg", label: "Twitter", href: "#" },
  { src: "/images/instagram.svg", label: "Instagram", href: "#" },
];

export default function Footer() {
  return (
    <footer className="mx-auto mb-10 mt-24 max-w-[1280px] px-6 md:mt-32 md:px-8 xl:px-0">
      <div className="flex flex-col items-center gap-8 rounded-lg bg-[#2c343e] px-6 py-12 md:gap-10 md:px-10 md:py-14 lg:h-[120px] lg:flex-row lg:gap-0 lg:px-[85px] lg:py-0">
        <Link href="/">
          <Image
            src="/images/logo-white.svg"
            alt="Coffeeroasters"
            width={160}
            height={24}
            className="h-auto w-40"
          />
        </Link>

        <nav className="lg:ml-[100px]">
          <ul className="flex flex-col items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/60 md:flex-row md:gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex items-center gap-6 lg:ml-auto">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} aria-label={s.label}>
                <Image
                  src={s.src}
                  alt=""
                  width={22}
                  height={22}
                  className="h-auto w-[22px]"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}