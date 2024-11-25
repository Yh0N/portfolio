import { GoHome, GoPerson } from "react-icons/go";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoFolderOpenOutline } from "react-icons/io5";
import { VscComment } from "react-icons/vsc";

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 w-full py-5 px-6 text-white z-50 md:top-[-10px]"
      style={{ backgroundColor: "#222831" }}
    >
      <header className="container mx-auto flex justify-between items-center">
        <a
          href="#home"
          className="relative group items-center hidden md:flex"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="w-20 h-20 cursor-pointer"
          />
          <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-[#39CEAF] text-white text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
            Jhon Portfolio
          </span>
        </a>

        <ul className="hidden md:flex space-x-8">
          <li className="relative group">
            <a
              href="#home"
              className="block items-center text-4xl cursor-pointer text-[#39CEAF] group-hover:text-[#137262]"
            >
              <GoHome />
            </a>
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-[#39CEAF] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
              Home
            </span>
          </li>
          <li className="relative group">
            <a
              href="#about"
              className="block items-center text-4xl cursor-pointer text-[#39CEAF] group-hover:text-[#137262]"
            >
              <GoPerson />
            </a>
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-[#39CEAF] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
              Sobre mí
            </span>
          </li>
          <li className="relative group">
            <a
              href="#projects"
              className="block items-center text-4xl cursor-pointer text-[#39CEAF] group-hover:text-[#137262]"
            >
              <IoFolderOpenOutline />
            </a>
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-[#39CEAF] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
              Proyectos
            </span>
          </li>
          <li className="relative group">
            <a
              href="#experience"
              className="block items-center text-4xl cursor-pointer text-[#39CEAF] group-hover:text-[#137262]"
            >
              <HiOutlineArchiveBox />
            </a>
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-[#39CEAF] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
              Experiencia
            </span>
          </li>
          <li className="relative group">
            <a
              href="#interests"
              className="block items-center text-4xl cursor-pointer text-[#39CEAF] group-hover:text-[#137262]"
            >
              <IoMdHeartEmpty />
            </a>
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-[#39CEAF] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
              Intereses
            </span>
          </li>
          <li className="relative group">
            <a
              href="#contact"
              className="block items-center text-4xl cursor-pointer text-[#39CEAF] group-hover:text-[#137262]"
            >
              <VscComment />
            </a>
            <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-[#39CEAF] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
              Contacto
            </span>
          </li>
        </ul>
      </header>

      <ul className="md:hidden fixed bottom-0 left-0 w-full bg-[#222831] py-3 px-6 flex justify-between items-center text-white z-50">
        <li className="relative group">
          <a
            href="#home"
            className="block items-center text-3xl cursor-pointer text-[#39CEAF] group-hover:text-[#137262]"
          >
            <GoHome />
          </a>
        </li>
        <li className="relative group">
          <a
            href="#about"
            className="block items-center text-3xl cursor-pointer text-[#39CEAF] group-hover:text-[#137262]"
          >
            <GoPerson />
          </a>
        </li>
        <li className="relative group">
          <a
            href="#projects"
            className="block items-center text-3xl cursor-pointer text-[#39CEAF] group-hover:text-[#137262]"
          >
            <IoFolderOpenOutline />
          </a>
        </li>
        <li className="relative group">
          <a
            href="#experience"
            className="block items-center text-3xl cursor-pointer text-[#39CEAF] group-hover:text-[#137262]"
          >
            <HiOutlineArchiveBox />
          </a>
        </li>
        <li className="relative group">
          <a
            href="#interests"
            className="block items-center text-3xl cursor-pointer text-[#39CEAF] group-hover:text-[#137262]"
          >
            <IoMdHeartEmpty />
          </a>
        </li>
        <li className="relative group">
          <a
            href="#contact"
            className="block items-center text-3xl cursor-pointer text-[#39CEAF] group-hover:text-[#137262]"
          >
            <VscComment />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
