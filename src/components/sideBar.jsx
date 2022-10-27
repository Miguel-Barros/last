import { Icon } from "@iconify/react";
import styles from "./styles/SideBar.module.css";

export default function SideBar() {
  return (
    <span className={styles.side}>
      <span className={styles.row}></span>
      <span>
        <Icon icon={"mdi:github"} className={styles.icon} />
        <Icon icon={"mdi:linkedin"} className={styles.icon} />
        <Icon icon={"mdi:instagram"} className={styles.icon} />
      </span>
      <span className={styles.row}></span>
    </span>
  );
}
