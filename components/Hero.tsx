import Image from "next/image";
import Button from "./Button";


export default function Hero() {
  return (
    <section className="relative mx-6 max-w-[1280px] overflow-hidden rounded-lg xl:mx-auto xl:h-[600px]">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="(min-width: 1280px) 1280px, 100vw"
        className="object-cover object-right"
      />
      {/* dégradé : sombre à gauche, transparent à droite */}
      <div className="absolute inset-0 bg-black/40 md:bg-transparent md:bg-linear-to-r md:from-black/70 md:via-black/35 md:to-transparent" />

      <div className="relative px-6 py-20 text-center text-white md:px-12 md:py-24 md:text-left lg:px-[85px] xl:flex xl:h-full xl:flex-col xl:items-start xl:justify-center xl:py-0">
        <h1 className="mx-auto max-w-md font-title text-4xl font-black leading-[1.05] md:mx-0 md:text-5xl lg:text-6xl">
          Great coffee made simple.
        </h1>
        <p className="mx-auto mt-6 max-w-sm text-[15px] leading-7 text-white/70 md:mx-0 md:mt-8">
          Start your mornings with the world&apos;s best coffees. Try our
          expertly curated artisan coffees from our best roasters delivered
          directly to your door, at your schedule.
        </p>
        <div className="mt-8 md:mt-12">
          <Button href="/subscribe">Create your plan</Button>
        </div>
      </div>
    </section>
  );
}