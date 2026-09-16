import Game from "../assets/images/game.jpeg"
import Calculator from "../assets/images/calculator.jpeg"
import LandingPage from "../assets/images/page.jpeg"
import Clone from "../assets/images/clone.jpeg"

function TaskCards() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-4 sm:px-6 md:px-10 py-8">

      <div className="w-full">
        <img src={Game} alt="Maze Game" className="w-full rounded-4xl object-cover"
        />
        <p className="font-bold text-2xl sm:text-3xl md:text-4xl mx-2 sm:mx-5 my-4 sm:my-5">
          Maze Game
        </p>
      </div>

      <div className="w-full">
        <img src={Calculator} alt="Calculator App" className="w-full rounded-4xl object-cover"
        />
        <p className="font-bold text-2xl sm:text-3xl md:text-4xl mx-2 sm:mx-5 my-4 sm:my-5">
          Calculator App
        </p>
      </div>

      <div className="w-full">
        <img src={LandingPage} alt="Landing Page" className="w-full rounded-4xl object-cover"
        />
        <p className="font-bold text-2xl sm:text-3xl md:text-4xl mx-2 sm:mx-5 my-4 sm:my-5">
          Landing Page
        </p>
      </div>

      <div className="w-full">
        <img src={Clone} alt="Clones" className="sm:w-105 rounded-4xl object-cover" />
        <p className="font-bold text-2xl sm:text-3xl md:text-4xl mx-2 sm:mx-5 my-4 sm:my-5">
          Clones
        </p>
      </div>

    </section>
  )
}

export default TaskCards