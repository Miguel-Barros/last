import Link from "next/link"
import styles from './styles/Nav.module.scss'
import { useRouter } from 'next/router'
import { useEffect } from "react"

export default function Nav() {
    const router = useRouter()

    useEffect(() => {
        const links = document.querySelectorAll(`li`)
        links.forEach((e) => {
            const item = e.children[0].getAttribute("href");
            if (item === router.pathname) {
                e.classList.add(styles.active)
            }
        })
    }, [])

    return (
        <nav className={styles.nav}>
            <h1 className={styles.logo}>
                <Link href="/">
                    LAST    
                </Link>
            </h1>
            <ul>
                <li><Link href="/about">Sobre</Link></li>
                <li><Link href="/skills">Habilidades</Link></li>
                <li><Link href="/">Formação</Link></li>
                <li><Link href="/">Portifolio</Link></li>
                <li><Link href="/">Contato</Link></li>
            </ul>
        </nav>
    )
}
