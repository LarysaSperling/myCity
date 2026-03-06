import { NavLink, Outlet } from "react-router-dom";
import PageTitle from "../pageTitle";

function Layout() {
  return (
    <div className="layout">
      <PageTitle />

      <header className="header">
        <div className="container">
          <h1 className="logo">✈️ Travel Planner</h1>

          <nav className="nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              end
            >
              Home
            </NavLink>

            <NavLink
              to="/categories"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Categories
            </NavLink>

            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Favorites
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2026 Travel Planner. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
