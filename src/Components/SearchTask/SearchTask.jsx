import styles from "./SearchTask.module.scss";
import { FaSearch } from "react-icons/fa";

export default function SearchTask({ searchValue, onSearchChange }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className={styles.searchRow}>
        <div className={styles.inputWrapper}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Поиск задач..."
            className={styles.searchInput}
          />
        </div>
      </div>
    </form>
  );
}
