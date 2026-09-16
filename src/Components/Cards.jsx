function Cards() {
  return (
    <div className="border-t border-gray-300 mx-4 sm:mx-6 md:mx-10 grid grid-cols-2 md:grid-cols-4">

      <div className="flex justify-center items-center h-32 px-3 border-r border-b border-gray-300 md:border-b-0">
        <h3 className="font-bold text-3xl sm:text-4xl">3+</h3>
        <p className="text-gray-500 text-xs ml-2">
          Years building with Unity
        </p>
      </div>

      <div className="flex justify-center items-center h-32 px-3 border-b border-gray-300 md:border-b-0 md:border-r">
        <h3 className="font-bold text-3xl sm:text-4xl">20+</h3>
        <p className="text-gray-500 text-xs ml-2">
          Projects and prototypes
        </p>
      </div>

      <div className="flex justify-center items-center h-32 px-3 border-r border-gray-300">
        <h3 className="font-bold text-3xl sm:text-4xl">8</h3>
        <p className="text-gray-500 text-xs ml-2">
          Detailed case studies
        </p>
      </div>

      <div className="flex justify-center items-center h-32 px-3">
        <h3 className="font-bold text-3xl sm:text-4xl">3.9</h3>
        <p className="text-gray-500 text-xs ml-2">
          Computer science CGPA
        </p>
      </div>

    </div>
  );
}

export default Cards;