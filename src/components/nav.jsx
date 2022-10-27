import styles from "./styles/Nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <header className={styles.header}>
      <nav>
        <p>LAST</p>
        <ul>
          <li>Sobre</li>
          <li>Habilidades</li>
          <li>formação</li>
          <li>Portifolio</li>
          <li>Contato</li>
        </ul>
      </nav>
    </header>
  );
}
