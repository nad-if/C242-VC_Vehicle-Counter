// src/utils/breadcrumbHandler.js
import { Link } from "react-router-dom";

export const generateBreadcrumb = (pathname) => {
  const pathnames = pathname.split("/").filter((x) => x);

  return (
    <>
      {/* Breadcrumb statis Pages */}
      <li className="leading-normal text-sm">
        <Link to="/" className="opacity-50 text-slate-700">
          Pages
        </Link>
      </li>

      {/* Breadcrumb dinamis dari URL */}
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return (
          <li
            key={index}
            className={`text-sm pl-2 capitalize leading-normal ${
              isLast ? "text-slate-700" : "text-gray-600 opacity-50"
            } before:float-left before:pr-2 before:content-['/']`}
            aria-current={isLast ? "page" : undefined}
          >
            {isLast ? (
              name
            ) : (
              <Link to={routeTo} className="text-slate-700">
                {name}
              </Link>
            )}
          </li>
        );
      })}
    </>
  );
};
