import Button from "./Button";

const steps = [
  {
    number: "01",
    title: "Pick your coffee",
    text: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },
  {
    number: "02",
    title: "Choose the frequency",
    text: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    number: "03",
    title: "Receive and enjoy!",
    text: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto mt-24 max-w-[1280px] px-6 text-center md:mt-32 md:px-8 md:text-left xl:mt-[115px] xl:px-0">
      <div className="xl:ml-[97px] xl:min-h-[565px] xl:max-w-[1045px]">
        <h2 className="font-title text-xl font-black text-grey">
          How it works
        </h2>

        <ol className="mt-8 grid grid-cols-1 gap-12 md:mt-6 md:grid-cols-3 md:gap-6 xl:gap-x-[89px]">
          {steps.map((s, i) => (
            <li key={s.number}>
              {/* progressive line tablet only */}
              <div className="relative hidden h-7 md:mb-8 md:block xl:hidden">
                {i < steps.length - 1 && (
                  <div className="absolute left-7 top-1/2 h-0.5 w-[calc(100%+1.5rem-1.75rem)] -translate-y-1/2 bg-peach" />
                )}
                <div className="absolute left-0 top-0 z-10 size-7 rounded-full border border-cyan-dark bg-cream" />
              </div>

              <span className="font-title text-6xl font-black text-peach md:text-7xl">
                {s.number}
              </span>
              <h3 className="mx-auto mt-4 max-w-[200px] font-title text-2xl font-black leading-8 md:mx-0 md:mt-8 lg:text-[28px]">
                {s.title}
              </h3>
              <p className="mx-auto mt-4 max-w-[330px] font-body text-[15px] font-normal leading-[25px] text-blue-dark/80 md:mx-0 md:mt-8 md:max-w-none xl:max-w-[280px]">
                {s.text}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 md:mt-16">
          <Button href="/subscribe">Create your plan</Button>
        </div>
      </div>
    </section>
  );
}