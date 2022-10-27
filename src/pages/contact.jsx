import styles from './styles/Contact.module.css'
import Nav from '../components/nav'
import Head from 'next/head'

export default function Contact() {
	return(
		<div className={styles.container}>
			<Head>
				<title>Contate-me</title>
			</Head>
			<Nav/>
			<main className={styles.main}>
			</main>
			<footer className={styles.footer}>
			</footer>
		</div>
	)
}