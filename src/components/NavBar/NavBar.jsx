import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill, RiCloseCircleLine } from "react-icons/ri";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/", exact: true },
    { id: 2, name: "About", path: "/about", exact: true },
    { id: 3, name: "Services", path: "/services", exact: true },
    { id: 4, name: "Contact", path: "/contact", exact: true },
    { id: 5, name: "NotFound", path: "*" },
  ];

  return (
    <nav className="p-6">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? <RiCloseCircleLine /> : <RiMenu2Fill />}
      </div>
      <ul className={`md:flex absolute md:static px-6 duration-1000 ${open ? 'top-16' : '-top-60'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
