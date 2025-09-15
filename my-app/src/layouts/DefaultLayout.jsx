import { NavLink, Outlet } from "react-router";

const DefaultLayout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/todos-done"}>Done Todos</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About us</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DefaultLayout;
