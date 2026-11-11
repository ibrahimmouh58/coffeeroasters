import Link from "next/link";

export default function Button({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-block rounded-sm bg-cyan-dark px-7 py-3.5 font-title text-[15px] font-bold text-white transition-colors hover:bg-cyan-light"
    >
      {children}
    </Link>
  );
}