import { useState } from "react";
import { Link } from "react-router-dom";
// Data Menu SideBar
import sideBarItems from "../../utils/sideBarItems";

const SideBar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex z-10">
      <div
        className={`${
          open ? "w-64" : "w-20"
        } bg-dark h-screen p-5 pt-2 relative duration-300`}
      >
        {/* Tombol kontrol sidebar */}
        <div
          className="absolute cursor-pointer -right-3 top-4 w-7 border-dark-purple
           border-2 rounded-full"
          onClick={() => setOpen(!open)}
        >
          <img
            src="./src/assets/control.png"
            className={`${!open && "rotate-180"} duration-300`}
            alt="Toggle Sidebar"
          />
        </div>

        {/* Logo dan Judul */}
        <div
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
          </h1>
        </div>

        {/* Menu Sidebar */}
        <ul className="pt-6">
          {sideBarItems.map((menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              {/* Ganti dengan React Router Link */}
              <Link to={menu.href} className="flex items-center gap-x-4 w-full">
                {/* Gunakan ikon Lucide */}
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
