
const Hero = () => {
  return (
    <section id="home" className="w-full">
      <div className="container mx-auto px-4 md:px-0 py-16 md:py-24 lg:py-32 xl:py-36">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 md:gap-x-8 lg:gap-x-12 xl:gap-x-16 2xl:gap-x-20">
          <div className="flex flex-col items-center md:items-start md:text-left md:w-full md:max-w-md md:mx-auto md:mb-16 md:order-1 md:col-span-2">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-none md:leading-none lg:leading-none">
              Front-end tutorial
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
