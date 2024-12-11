import { useState } from "react";
import { Link } from "react-router-dom";
// Data Menu SideBar
import sideBarItems from "../../utils/sideBarItems";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="relative flex overflow-hidden my-4 ml-4 rounded-2xl border-2 bg-black/30 shadow-none">
      <div
        className={`${
          open ? "w-64" : "w-20"
        } bg-dark h-screen p-5 pt-10 relative duration-300`}
      >
        {/* Tombol Toggle Sidebar */}

        <div
          className="absolute z-5000 cursor-pointer -right-3 top-11 w-8 h-8 border-2 border-dark-purple 
    rounded-full bg-white flex items-center justify-center shadow-lg"
          onClick={() => setOpen(!open)}
        >
          <img
            src="./src/assets/control.png"
            className={`w-5 h-5 ${!open && "rotate-180"} duration-300`}
            alt="Toggle Sidebar"
          />
        </div>

        {/* Logo dan Judul */}
        <div className="flex items-center gap-x-4">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
            alt="Logo"
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Vecount
          </h1>
        </div>

        {/* Menu Sidebar */}
        <ul className="pt-6">
          {sideBarItems.map((menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            ${menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
            >
              <Link to={menu.href} className="flex items-center gap-x-4 w-full">
                {menu.icon}
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 whitespace-nowrap`}
                >
                  {menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
