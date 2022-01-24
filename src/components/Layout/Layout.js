import { NavLink, Outlet } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Layout() {
  return (
    <div>
      <nav>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
        <NavLink to="/movies" className={styles.link}>
          Movies
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
