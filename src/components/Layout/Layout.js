import { Link, Outlet } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Layout() {
  return (
    <div>
      <nav>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="movies" className={styles.link}>
          Movies
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
