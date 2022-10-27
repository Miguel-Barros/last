import styles from './styles/Projects.module.css'
import Nav from '../components/nav'
import Head from 'next/head'

export default function Projects() {
	return(
		<div className={styles.container}>
			<Head>
				<title>Meus projetos</title>
			</Head>
			<Nav/>
			<main className={styles.main}>
				<span className={styles.projectGroup}>
					<div className={styles.project}>
						<img src="https://st2.depositphotos.com/2557325/5432/i/600/depositphotos_54326397-stock-photo-shrek-at-madame-tussauds.jpg" className={styles.projectPreview} />
					</div>
					<div className={styles.project}>
						<img src="https://st2.depositphotos.com/2557325/5432/i/600/depositphotos_54326397-stock-photo-shrek-at-madame-tussauds.jpg" className={styles.projectPreview} />
					</div>
					<div className={styles.project}>
						<img src="https://st2.depositphotos.com/2557325/5432/i/600/depositphotos_54326397-stock-photo-shrek-at-madame-tussauds.jpg" className={styles.projectPreview} />
					</div>
				</span>
			</main>
			<footer className={styles.footer}>
			</footer>
		</div>
	)
}