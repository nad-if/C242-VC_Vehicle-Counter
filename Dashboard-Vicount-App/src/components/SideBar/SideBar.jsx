import { useState } from "react";
import { NavLink } from "react-router-dom";
import sideBarItems from "../../utils/sideBarItems";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex z-10">
      <div
        className={`${open ? "w-64" : "w-20"
          } bg-dark h-screen p-3 pt-2 relative duration-300`}
      >
        <div
          className="absolute cursor-pointer -right-3 top-4 w-7 border-dark-purple
           border-2 rounded-full"
          onClick={() => setOpen(!open)}
        >
          <img
            src="/assets/control.png"
            className={`${!open && "rotate-180"} duration-300`}
            alt="Toggle Sidebar"
          />
        </div>

        <div
          className={`flex gap-x-4 items-center ${open ? "justify-center" : ""
            }`}
        >
          <img
            src="/logo.png"
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
              } w-12 rounded-full`}
            alt="Logo"
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
              }`}
          >
            V-count
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
                  `flex rounded-md p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 w-full ${isActive
                    ? "bg-blue-500 text-white" // Menambahkan highlight aktif
                    : "hover:bg-light-white text-gray-300"
                  }`
                }
              >
                {menu.icon}
                <span
                  className={`${!open && "hidden"
                    } origin-left duration-200 whitespace-nowrap`}
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
