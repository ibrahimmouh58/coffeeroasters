import Image from "next/image";

const offices = [
  {
    icon: "/images/unitedkingdom.svg",
    country: "United Kingdom",
    lines: ["68 Asfordby Rd", "Alcaston", "SY6 1YA", "+44 1241 918425"],
  },
  {
    icon: "/images/canada.svg",
    country: "Canada",
    lines: ["1528 Eglinton Avenue", "Toronto", "Ontario M4P 1A6", "+1 416 485 2997"],
  },
  {
    icon: "/images/australia.svg",
    country: "Australia",
    lines: ["36 Swanston Street", "Kewell", "Victoria", "+61 4 9928 3629"],
  },
];

export default function Headquarters() {
  return (
    <section className="mx-auto mt-20 max-w-[1110px] px-6 text-center md:mt-32 md:text-left lg:px-20">
      <h2 className="font-title text-xl font-black text-grey">
        Our headquarters
      </h2>

      <ul className="mt-10 grid grid-cols-1 gap-12 md:mt-12 md:grid-cols-3 md:gap-8">
        {offices.map((o) => (
          <li key={o.country}>
            <div className="flex h-10 items-center justify-center md:justify-start">
              <Image
                src={o.icon}
                alt=""
                width={40}
                height={40}
                className="h-auto max-h-10 w-auto"
              />
            </div>
            <h3 className="mt-8 font-title text-2xl font-black md:mt-10 lg:text-[28px]">
              {o.country}
            </h3>
            <address className="mt-4 text-[15px] not-italic leading-7 text-blue-dark/80 md:mt-6">
              {o.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
          </li>
        ))}
      </ul>
    </section>
  );
}