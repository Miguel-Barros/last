import { Icon } from '@iconify/react'
import styles from './styles/ContactsBar.module.scss'

export default function ContactsBar() {
    return (
        <span className={styles.contactsBar}>
            <Icon icon="mdi:github" className={styles.icon} />
            <Icon icon="mdi:linkedin" className={styles.icon} />
            <Icon icon="mdi:instagram" className={styles.icon} />
        </span>
    )
}
