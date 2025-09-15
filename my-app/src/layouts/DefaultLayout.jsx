import { NavLink, Outlet } from "react-router";

const DefaultLayout = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About us</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </header>
  );
};

export default DefaultLayout;
