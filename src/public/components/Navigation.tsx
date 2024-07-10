import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import Logo from "./Logo";
import MenuAuthDesktop from "./MenuAuthDesktop";
import MenuUnauthDesktop from "./MenuUnauthDesktop";
import MenuAuthMobile from "./MenuAuthMobile";
import MenuUnauthMobile from "./MenuUnauthMobile";
import NavActions from "./NavActions";
import { useAuth } from "../hooks/useAuth";

function Navigation() {
  const { user } = useAuth();
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  // Close the side navigation when the location changes
  useEffect(() => {
    setToggleMenu(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setToggleMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed z-10 flex w-full flex-row items-center justify-between border border-b-slate-200 bg-white p-3 text-slate-500">
      <Logo mode="dark" />
      <div className="flex lg:hidden">
        <button onClick={() => setToggleMenu(!toggleMenu)}>
          <IoMenu className="h-8 w-8" />
        </button>
      </div>
      <nav
        ref={navRef}
        className={`${toggleMenu ? "flex" : "hidden"} fixed left-0 top-0 h-dvh min-w-[300px] flex-col space-y-2 overflow-y-auto border-r border-slate-200 bg-white px-6 py-10 font-medium text-black`}
      >
        {user ? <MenuAuthMobile /> : <MenuUnauthMobile />}
      </nav>
      <nav className="semibold hidden space-x-6 text-lg font-normal lg:flex lg:items-baseline">
        {user ? <MenuAuthDesktop /> : <MenuUnauthDesktop />}
      </nav>
      <div className="hidden lg:flex">
        {user ? (
          <NavActions />
        ) : (
          <NavLink to="/login" className="text-base font-medium">
            Log In
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Navigation;
