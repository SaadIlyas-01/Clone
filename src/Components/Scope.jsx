function Scope() {
  return (
    <section>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-10 mx-4 sm:mx-8 my-10 sm:my-16 lg:my-20 px-6 sm:px-10 lg:px-12 py-10 lg:py-0 lg:h-60 bg-blue-800 rounded-4xl">

        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <h3 className="text-gray-400 font-bold mb-2">
            Working together
          </h3>

          <p className="text-2xl sm:text-3xl font-bold text-white leading-tight mx-auto lg:mx-0 max-w-sm">
            Clear scope. Visible progress. Playable milestones.
          </p>
        </div>

        <div className="w-full lg:w-1/3">
          <p className="text-white text-sm sm:text-base text-center leading-relaxed max-w-md mx-auto">
            I begin by defining the player-facing outcome and technical
            constraints, then break the work into small testable systems.
            You get frequent playable builds and direct communication
            throughout development.
          </p>
        </div>

        <div className="w-full lg:w-1/3 flex justify-center">
          <button className="bg-white px-5 py-3 rounded-full font-bold cursor-pointer text-sm sm:text-base">
            Tell me what you're building
          </button>
        </div>

      </div>
    </section>
  );
}

export default Scope;