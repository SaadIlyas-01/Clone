function Hero() {
  return (
    <section className="min-h-[600px] bg-gray-50 flex justify-center items-center px-4 sm:px-6 py-16">

      <div className="w-full max-w-5xl">

        <div className="flex justify-center mb-5">
          <p className="border border-gray-400 text-xs text-gray-600 font-bold rounded-full px-4 py-2 text-center">
            Web developer · Lahore, Pakistan
          </p>
        </div>

        <div className="mx-auto max-w-4xl mb-8">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center leading-tight">
            Building the systems behind great play.
          </h1>
        </div>

        <p className="w-full max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 text-center leading-relaxed">
          I’m Muhammad Saad—a Web Developer turning mechanics into responsive,
          maintainable experiences across mobile.
        </p>

        <div className="flex flex-row justify-center items-center gap-3">

          <button className="bg-black text-white px-6 py-4 rounded-full font-bold text-xs cursor-pointer">
            Explore my Work
          </button>

          <button className="border border-gray-400 px-6 py-4 rounded-full font-bold text-xs cursor-pointer">
            Start a project
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;