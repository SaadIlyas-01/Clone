function Desc() {
  return (
    <section className="min-h-[400px] flex flex-col lg:flex-row px-6 sm:px-10 lg:px-16 py-10 lg:py-20 gap-8 lg:gap-16">
      
      <div className="w-full lg:w-1/2">
        <p className="text-xs sm:text-sm font-bold text-purple-600 mb-3">
          ABOUT THE DEVELOPER
        </p>

        <p className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Curious about systems. Serious about feel.
        </p>
      </div>

      <div className="w-full lg:w-1/2 lg:pt-24">
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          I build Websites by connecting solid engineering with the small
          details players notice immediately: timing, feedback, clarity,
          responsiveness, and flow.
        </p>
      </div>

    </section>
  );
}

export default Desc;