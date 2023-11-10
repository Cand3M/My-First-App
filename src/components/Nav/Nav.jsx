import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import NavLinkComp from "../navLink/NavLinkComp";
import styles from './nav.module.css';
function Nav({ onSearch }) {
  return (
    <div className={styles.nav}>
      <Link to='/home'>
        <button>Home</button>
      </Link>
     <NavLinkComp to='/about'> <span>About</span></NavLinkComp>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Nav;
