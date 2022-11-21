import Link from "next/link"
import styles from './styles/Nav.module.scss'

export default function Nav() {
    
    return (
        <nav className={styles.nav}>
            <h1 className={styles.logo}>
                <Link href="/">
                    LAST
                </Link>
            </h1>
            <ul>
                <li><Link href="/about">Sobre</Link></li>
                <li><Link href="/">Habilidades</Link></li>
                <li><Link href="/">Formação</Link></li>
                <li><Link href="/">Portifolio</Link></li>
                <li><Link href="/">Contato</Link></li>
            </ul>
        </nav>
    )
}
