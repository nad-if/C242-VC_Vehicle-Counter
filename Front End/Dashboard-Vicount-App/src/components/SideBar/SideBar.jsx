import { useState } from "react";
import { NavLink } from "react-router-dom";
import sideBarItems from "../../utils/sideBarItems";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex z-10">
      <div
<<<<<<< HEAD
        className={`${open ? "w-64" : "w-20"
          } bg-dark h-screen p-5 pt-2 relative duration-300`}
=======
        className={`${
          open ? "w-64" : "w-20"
        } bg-dark h-screen p-5 pt-2 relative duration-300`}
>>>>>>> 4703ff002f059ab87ddba50302e3eeaae55875b9
      >
        <div
          className="absolute cursor-pointer -right-3 top-4 w-7 border-dark-purple
           border-2 rounded-full"
          onClick={() => setOpen(!open)}
        >
          <img
<<<<<<< HEAD
            src="/assets/control.png"
=======
            src="./src/assets/control.png"
>>>>>>> 4703ff002f059ab87ddba50302e3eeaae55875b9
            className={`${!open && "rotate-180"} duration-300`}
            alt="Toggle Sidebar"
          />
        </div>

        <div
<<<<<<< HEAD
          className={`flex gap-x-4 items-center ${open ? "justify-center" : ""
            }`}
        >
          <img
            src="/logo.svg"
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
              } w-12 rounded-full`}
            alt="Logo"
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
              }`}
          >
            V-count
=======
          className={`flex gap-x-4 items-center ${
            open ? "justify-center" : ""
          }`}
        >
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
>>>>>>> 4703ff002f059ab87ddba50302e3eeaae55875b9
          </h1>
        </div>

        <ul className="pt-6">
          {sideBarItems.map((menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 
              ${menu.gap ? "mt-9" : "mt-2"} `}
            >
              <NavLink
                to={menu.href}
                className={({ isActive }) =>
<<<<<<< HEAD
                  `flex rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 w-full ${isActive
                    ? "bg-blue-500 text-white" // Menambahkan highlight aktif
                    : "hover:bg-light-white text-gray-300"
=======
                  `flex rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 w-full ${
                    isActive
                      ? "bg-blue-500 text-white" // Menambahkan highlight aktif
                      : "hover:bg-light-white text-gray-300"
>>>>>>> 4703ff002f059ab87ddba50302e3eeaae55875b9
                  }`
                }
              >
                {menu.icon}
                <span
<<<<<<< HEAD
                  className={`${!open && "hidden"
                    } origin-left duration-200 whitespace-nowrap`}
=======
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 whitespace-nowrap`}
>>>>>>> 4703ff002f059ab87ddba50302e3eeaae55875b9
                >
                  {menu.title}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
