import Image from "next/image";

export default function Commitment() {
  return (
    <>
      {/* Our commitment */}
      <section className="mx-auto mt-20 grid max-w-[1110px] grid-cols-1 items-center gap-10 px-6 text-center md:mt-32 md:grid-cols-[223px_1fr] md:items-start md:gap-14 md:px-10 md:text-left lg:grid-cols-[320px_1fr] lg:gap-16 lg:px-20 xl:h-[520px] xl:grid-cols-[445px_540px] xl:items-center xl:gap-x-[125px] xl:gap-y-0 xl:px-0">
  <div className="relative aspect-[327/400] overflow-hidden rounded-lg md:aspect-auto md:h-[375px] lg:h-[450px] xl:h-full xl:w-[445px]">
    <Image
      src="/images/commitment.jpg"
      alt="Un barista prépare un café"
      fill
      sizes="(min-width: 1280px) 445px, (min-width: 1024px) 320px, (min-width: 768px) 223px, 100vw"
      className="object-cover"
    />
  </div>

  <div className="mx-auto max-w-[460px] md:mx-0 md:max-w-none xl:max-w-[540px]">
    <h2 className="font-title text-3xl font-black md:text-4xl">
      Our commitment
    </h2>
    <p className="mt-6 font-body text-[15px] font-normal leading-[25px] text-blue-dark/80 md:mt-8">
            We&apos;re built on a simple mission and a commitment to doing good
            along the way. We want to make it easy for you to discover and brew
            the world&apos;s best coffee at home. It all starts at the source.
            To locate the specific lots we want to purchase, we travel nearly 60
            days a year trying to understand the challenges and opportunities
            in each of these places. We collaborate with exceptional coffee
            growers and empower a global community of farmers through with well
            above fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </section>

     {/* Uncompromising quality */}
<section className="mx-auto mt-28 max-w-[1280px] px-6 md:mt-72 md:px-10 lg:mt-52 xl:mt-48 xl:px-0">
  <div className="relative flex flex-col rounded-lg bg-[#2c343e] text-center text-white lg:h-[474px] lg:flex-row lg:items-center lg:text-left">
    <div className="relative z-10 mx-6 -mt-12 aspect-[4/3] overflow-hidden rounded-lg md:mx-[58px] md:-mt-40 md:aspect-[572/320] lg:absolute lg:-top-[88px] lg:right-[85px] lg:mx-0 lg:mt-0 lg:aspect-auto lg:h-[474px] lg:w-[444px]">
      <Image
        src="/images/quality.jpg"
        alt="Un café latte tenu à la main"
        fill
        sizes="(min-width: 1024px) 444px, (min-width: 768px) 572px, 100vw"
        className="object-cover"
      />
    </div>

    <div className="px-6 pb-14 pt-10 md:px-[90px] md:pb-[73px] md:pt-[75px] lg:max-w-[560px] lg:px-[85px] lg:py-16">
      <h2 className="font-title text-3xl font-black md:text-4xl">
        Uncompromising quality
      </h2>
      <p className="mt-6 font-body text-[15px] font-normal leading-[25px] text-white/80 md:mt-8">
        Although we work with growers who pay close attention to all stages of
        harvest and processing, we employ, on our end, a rigorous quality
        control program to avoid over-roasting or baking the coffee dry. Every
        bag of coffee is tagged with a roast date and batch number. Our goal is
        to roast consistent, user-friendly coffee, so that brewing is easy and
        enjoyable.
      </p>
    </div>
  </div>
</section>
    </>
  );
}