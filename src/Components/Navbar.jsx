import { useState } from "react";
import Logo from "../assets/images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white px-4 sm:px-6 md:px-10 lg:px-20 xl:px-50 py-2">

      <div className="border border-gray-300 rounded-3xl md:rounded-full">

        <div className="h-14 px-3 flex items-center justify-between">

          <div className="flex items-center">
            <img src={Logo} alt="logo" className="w-9 h-9"/>

            <div className="ml-3">
              <p className="font-bold text-xs">
                Muhammad Saad
              </p>

              <p className="text-gray-400 text-xs">
                Web Developer
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-9 text-xs text-gray-500 font-bold">

            <a href="">Projects</a>
            <a href="">About</a>
            <a href="">Capabilities</a>
            <a href="">Writing</a>

            <button className="border-2 rounded-full py-3 px-6 lg:px-7 text-white bg-black cursor-pointer">
              Let's Talk
            </button>

          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-xs font-bold text-gray-600">
            {menuOpen ? "Close" : "Menu"}
          </button>

        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 px-5 py-5 ">

            <div className="flex flex-col items-center gap-5 text-xs text-gray-500 font-bold">

              <a href="">Projects</a>
              <a href="">About</a>
              <a href="">Capabilities</a>
              <a href="">Writing</a>

              <button className="border-2 rounded-full py-3 px-7 text-white bg-black cursor-pointer">
                Let's Talk
              </button>

            </div>

          </div>
        )}

      </div>

    </nav>
  );
}

export default Navbar;