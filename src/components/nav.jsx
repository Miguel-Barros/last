import styles from './styles/Nav.module.css'
import Link from 'next/link'

export default function Nav() {

	return(
		<header className={styles.header}>
			<Link href={'/'}>
				<p className={styles.logo}>LAST</p>
			</Link>
			<ul>
				<Link href={'/about'}>
					<li>Sobre</li>
				</Link>
				<Link href={'/skills'}>
					<li>Habilidades</li>
				</Link>
				<Link href={'/formation'}>
					<li>Formação</li>
				</Link>
				<Link href={'/projects'}>
					<li>Portifolio</li>
				</Link>
				<Link href={'/contact'}>
					<li>Contato</li>
				</Link>
			</ul>
		</header>
	)
}