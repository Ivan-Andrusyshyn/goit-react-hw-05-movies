import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from './loader/loader';
import './style.css';
const Header = () => {
  return (
    <div>
      <header className="header">
        <ul className="list_link">
          <li className="list_item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="list_item">
            <NavLink to="movies">Movies</NavLink>
          </li>
        </ul>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Header;
