import Image from "next/image";

const products = [
  {
    name: "Gran Espresso",
    image: "/images/granespresso.png",
    text: "Light and flavorful blend with cocoa and black pepper for an intense experience",
  },
  {
    name: "Planalto",
    image: "/images/planalto.png",
    text: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
  },
  {
    name: "Piccollo",
    image: "/images/piccollo.png",
    text: "Mild and smooth blend featuring notes of toasted almond and dried cherry",
  },
  {
    name: "Danche",
    image: "/images/danche.png",
    text: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
  },
];

export default function Collection() {
  return (
    <section className="mx-auto mt-20 max-w-[1280px] px-6 md:mt-28 md:px-10 xl:mt-[115px] xl:px-0">
      <div className="relative">
        <h2 className="select-none text-center font-title text-6xl font-black leading-none text-blue-dark/20 md:text-[88px] lg:text-[8rem]">
          our collection
        </h2>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-cream/[0.0001] to-cream"
        />
      </div>

      <ul className="mt-6 grid grid-cols-1 gap-12 md:-mt-8 md:gap-6 lg:mt-16 lg:grid-cols-4 lg:gap-8">
        {products.map((p) => (
          <li
            key={p.name}
            className="text-center md:grid md:grid-cols-2 md:items-center md:text-left lg:block"
          >
            <Image
              src={p.image}
              alt={p.name}
              width={200}
              height={200}
              className="mx-auto h-auto w-40 md:w-[200px] lg:w-full lg:max-w-[200px]"
            />
            <div>
              <h3 className="mt-6 font-title text-2xl font-black md:mt-0 lg:mt-10">
                {p.name}
              </h3>
              <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-blue-dark/80 md:mx-0 md:max-w-[240px] lg:max-w-xs">
                {p.text}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}