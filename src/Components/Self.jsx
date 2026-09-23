import Me from "../assets/images/me.jpeg";

function Self() {
  return (
    <section className="border-b border-gray-300 mx-5 sm:mx-8 lg:mx-10 py-10 lg:py-16 flex flex-col lg:flex-row gap-8 lg:gap-10">
      
      <div className="w-full lg:w-1/2 flex justify-center lg:block ">
        <img
          src={Me} alt="Muhammad Saad Ilyas" className="w-full md:w-120 max-w-md lg:max-w-none h-auto md:h-120 rounded-4xl object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center">

        <p className="text-xs sm:text-sm font-bold text-purple-600 mb-4">
          Muhammad Saad Ilyas · Lahore, Pakistan
        </p>

        <p className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight mb-5">
          Web developer building complete, maintainable Websites.
        </p>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
          Results-driven Unity Game Developer with 3+ years of hands-on
          experience building and shipping 2D/3D games and interactive
          applications. I’ve delivered published titles on Google Play with
          live in-app purchases and ad integrations.
        </p>

        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
          My work covers gameplay programming, enemy AI, multiplayer, WebGL,
          AR, and mobile performance optimization. I use SOLID principles,
          object pooling, and modular architecture to create codebases that
          remain practical as a project grows.
        </p>

        <div className="flex gap-5">
          <button className="text-sm font-bold border-b cursor-pointer">
            View Projects
          </button>

          <button className="text-sm font-bold border-b cursor-pointer">
            Email me
          </button>
        </div>

      </div>

    </section>
  );
}

export default Self;