import styles from "./styles/ScrollBar.module.css";

export default function ScrollBar() {
  return (
    <span className={styles.scroll}>
      <span className={styles.dumb}></span>
    </span>
  )
}