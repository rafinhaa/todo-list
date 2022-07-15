import styles from "./styles.module.css";

import igniteLogo from "../../assets/logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Todo" />
    </header>
  );
};