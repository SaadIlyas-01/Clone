import Controller from "../assets/images/controller.jpeg";
import Code from "../assets/images/code.jpeg";
import App from "../assets/images/app.jpeg";

function BuildCards() {
  return (
    <section className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-4 px-4 sm:px-6 md:px-8">

      <div className="border border-gray-400 rounded-3xl p-3">
        <img src={Controller} alt="gameplay" className="w-full h-55 object-cover rounded-3xl"
        />

        <h2 className="font-bold text-2xl sm:text-3xl mx-3 mt-4 mb-3">
          Gameplay that responds
        </h2>

        <p className="text-sm text-gray-500 mx-3 mb-4">
          Player controllers, combat, progression, abilities, feedback, UI,
          and the tuning that makes every input feel intentional.
        </p>
      </div>

      <div className="border border-gray-400 rounded-3xl p-3">
        <img src={Code} alt="code" className="w-full h-55 object-cover rounded-3xl"
        />

        <h2 className="font-bold text-2xl sm:text-3xl mx-3 mt-4 mb-3">
          Systems that scale
        </h2>

        <p className="text-sm text-gray-500 mx-3 mb-4">
          AI, pathfinding, procedural generation, reusable tools, and
          modular C# architecture that stays practical as production grows.
        </p>
      </div>

      <div className="border border-gray-400 rounded-3xl p-3">
        <img src={App} alt="app" className="w-full h-55 object-cover rounded-3xl"
        />

        <h2 className="font-bold text-2xl sm:text-3xl mx-3 mt-4 mb-3">
          Builds that ship
        </h2>

        <p className="text-sm text-gray-500 mx-3 mb-4">
          Photon multiplayer, Android, WebGL, AR Foundation, IAP, ads,
          profiling, optimization, and release support.
        </p>
      </div>

    </section>
  );
}

export default BuildCards;