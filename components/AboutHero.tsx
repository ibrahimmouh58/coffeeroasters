import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative mx-6 h-[400px] max-w-[1280px] overflow-hidden rounded-lg md:mx-8 md:h-auto xl:mx-auto xl:h-[450px]">
      {/* Photo mobile + desktop : cachée uniquement sur tablette */}
      <Image
        src="/images/about-hero.jpg"
        alt=""
        fill
        priority
        sizes="(min-width: 1280px) 1280px, 100vw"
        className="block object-cover object-center md:hidden lg:block lg:object-right"
      />

      {/* Photo tablette : visible uniquement de 768px à 1023px */}
      <Image
        src="/images/aboutherotablet.jpg"
        alt=""
        fill
        sizes="100vw"
        className="hidden object-cover object-center md:block lg:hidden"
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/40 to-transparent md:bg-linear-to-r md:from-black/30 md:via-black/10 md:to-transparent xl:from-black/50 xl:via-black/25" />

      <div className="relative flex h-full flex-col justify-center px-6 text-center text-white md:block md:h-auto md:px-12 md:py-24 md:text-left lg:px-20 xl:flex xl:h-full xl:flex-col xl:justify-center xl:py-0">
        <h1 className="font-title text-4xl font-black md:text-[40px]">
          About Us
        </h1>
        <p className="mx-auto mt-6 max-w-sm font-body text-[15px] font-normal leading-[25px] text-white/80 md:mx-0 md:max-w-[340px]">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in
          every shipment.
        </p>
      </div>
    </section>
  );
}