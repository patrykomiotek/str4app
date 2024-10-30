import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { ThemeSwitcher } from "@components/Theme/ThemeSwitcher";
import { Route } from "../../routes";
import { selectBasketProductsCount } from "../../features/products/basketSlice";
import { Basket } from "@components/Basket";

export const Menu = () => {
  const count = useSelector(selectBasketProductsCount);
  return (
    <div className="pb-4 border-b-2 border-stone-900  dark:border-slate-500">
      <nav>
        <ul className="flex mt-2">
          <li className="mr-4">
            <NavLink
              to={Route.HOME.path}
              className={({ isActive }) =>
                isActive ? "text-red-400" : "dark:text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink
              to={Route.CLAIMS.path}
              className={({ isActive }) =>
                isActive ? "text-red-400" : "dark:text-white"
              }
            >
              Claims
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink
              to={Route.FILMS.path}
              className={({ isActive }) =>
                isActive ? "text-red-400" : "dark:text-white"
              }
            >
              Films
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink
              to={Route.PRODUCTS_LIST.path}
              className={({ isActive }) =>
                isActive ? "text-red-400" : "dark:text-white"
              }
            >
              Products
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink
              to={Route.COUNTER.path}
              className={({ isActive }) =>
                isActive ? "text-red-400" : "dark:text-white"
              }
            >
              Counter
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink
              to={Route.VIEWPORT.path}
              className={({ isActive }) =>
                isActive ? "text-red-400" : "dark:text-white"
              }
            >
              ViewPort
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink
              to={Route.DISCO_BUTTON.path}
              className={({ isActive }) =>
                isActive ? "text-red-400" : "dark:text-white"
              }
            >
              Disco Button
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink
              to={Route.REGISTRATION_FORM_MUI.path}
              className={({ isActive }) =>
                isActive ? "text-red-400" : "dark:text-white"
              }
            >
              Registration MUI
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink
              to={Route.REGISTRATION_FORM_REFS.path}
              className={({ isActive }) =>
                isActive ? "text-red-400" : "dark:text-white"
              }
            >
              Registration refs
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink
              to={Route.REGISTRATION_FORM_REFS.path}
              className={({ isActive }) =>
                isActive ? "text-red-400" : "dark:text-white"
              }
            >
              Registration refs
            </NavLink>
          </li>
          <li className="mr-4">
            <NavLink
              to={Route.REGISTRATION_FORM_RHF.path}
              className={({ isActive }) =>
                isActive ? "text-red-400" : "dark:text-white"
              }
            >
              Registration RHF
            </NavLink>
          </li>
          <li className="mr-4">
            <ThemeSwitcher />
          </li>
          <li className="mr-4">
            <NavLink to={Route.ORDER_SUMMARY.path}>
              <Basket />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
