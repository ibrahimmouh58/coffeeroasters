import Image from "next/image";

const features = [
  {
    icon: "/images/bestquality.svg",
    title: "Best quality",
    text: "Discover an endless variety of the world's best artisan coffee beans from each of our roasters.",
  },
  {
    icon: "/images/exclusivebenefits.svg",
    title: "Exclusive benefits",
    text: "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    icon: "/images/freeshipping.svg",
    title: "Free shipping",
    text: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="mx-auto mt-24 max-w-[1280px] px-6 md:mt-32 md:px-6 xl:mt-[115px] xl:px-0">
      <div className="relative">
        {/* Fond sombre :
            mobile   = 902px de haut (coupé au milieu de la 2e carte)
            tablette = coupé au milieu de la 2e carte
            desktop  = 152px avant le bas des cartes */}
        <div className="absolute inset-x-0 top-0 h-[902px] rounded-lg bg-[#2c343e] md:h-auto md:bottom-80 lg:bottom-32 xl:bottom-[152px]" />

        <div className="relative px-6 pt-14 text-center text-white md:px-[62px] md:pt-16 lg:px-10 lg:pt-20 xl:px-[85px] xl:pt-[100px]">
          <h2 className="font-title text-3xl font-black md:text-4xl">
            Why choose us?
          </h2>
          <p className="mx-auto mt-6 max-w-[480px] font-body text-[15px] font-normal leading-[25px] text-white/90 md:mt-8">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>

          <ul className="mt-16 grid grid-cols-1 gap-6 md:mt-16 md:gap-7 lg:grid-cols-3 lg:gap-4 xl:gap-[30px]">
            {features.map((f) => (
              <li
                key={f.title}
                className="flex h-[382px] flex-col items-center rounded-md bg-cyan-dark px-6 pt-[72px] md:grid md:h-auto md:grid-cols-[200px_1fr] md:items-center md:px-0 md:py-12 md:text-left lg:flex lg:flex-col lg:px-8 lg:pb-12 lg:pt-14 lg:text-center"
              >
                <div className="flex h-[72px] w-full items-center justify-center md:h-[90px]">
                  <Image
                    src={f.icon}
                    alt=""
                    width={90}
                    height={90}
                    className="h-auto max-h-full w-auto max-w-[72px] md:max-w-[90px]"
                  />
                </div>
                <div className="lg:w-full">
                  <h3 className="mt-16 font-title text-2xl font-black md:mt-0 lg:mt-10 lg:text-[28px]">
                    {f.title}
                  </h3>
                  <p className="mt-6 font-body text-[15px] font-normal leading-[25px] text-white/90 md:mt-4 md:pr-8 lg:mt-6 lg:pr-0">
                    {f.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}