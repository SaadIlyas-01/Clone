import Logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="bg-black px-5 md:px-10 py-10">

      <div className="border-b border-gray-600 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 pb-10">

        <div>
          <img src={Logo} alt="logo" className="w-12 h-12 mb-5 rounded-2xl"
          />

          <p className="font-bold text-white text-4xl mb-5">
            Building Websites remember.
          </p>

          <p className="text-gray-400">
            Web Developer based in Lahore, Pakistan.
          </p>
        </div>

        <div className="leading-7 text-white text-sm md:mt-15">
          <p className="text-gray-400 mb-2">Explore</p>
          <p>Projects</p>
          <p>About</p>
          <p>Capabilities</p>
          <p>Writing</p>
        </div>

        <div className="leading-7 text-white text-sm md:mt-15">
          <p className="text-gray-400 mb-2">Connect</p>
          <p>Email</p>
          <p>Github</p>
          <p>LinkedIn</p>
        </div>

      </div>

      <div className="text-gray-400 text-sm mt-5">
        <p>&copy; 2026 Muhammad Saad Ilyas</p>
      </div>

    </footer>
  );
}

export default Footer;