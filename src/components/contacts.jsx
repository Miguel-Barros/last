import { Icon } from '@iconify/react'
import Link from 'next/link'
import styles from './styles/ContactsBar.module.scss'

export default function ContactsBar() {
    return (
        <div className={styles.bar}>
            <span className={styles.line}></span>
            <span className={styles.icons}>
                <Link href="https://github.com/Miguel-Barros">
                    <Icon icon="mdi:github" className={styles.icon} />
                </Link>
                <Link href="https://www.linkedin.com/in/miguelbarrosdev/">
                    <Icon icon="mdi:linkedin" className={styles.icon} />
                </Link>
                <Link href="https://www.instagram.com/eu.last/">
                    <Icon icon="mdi:instagram" className={styles.icon} />
                </Link>
            </span>
            <span className={styles.line}></span>
        </div>
    )
}
