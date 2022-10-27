import styles from './styles/About.module.css'
import Nav from '../components/nav'
import Head from 'next/head'
import SideBar from '../components/sideBar'
import ScrollBar from '../components/scrollBar'

export default function About() {
	return(
		<div className={styles.container}>
			<Head>
				<title>Sobre mim</title>
			</Head>
			<Nav/>
			<main className={styles.main}>
				<SideBar />
				<span className={styles.left}>
					<img className={styles.profile} src="https://cdns-images.dzcdn.net/images/artist/f72dbd690abe4f176bdac81375d8189f/500x500.jpg" alt="" />
					<h2>Programador</h2>
					<h2>Full-stack & UX Design</h2>
				</span>
				<span className={styles.right}>
					<p>Eu sou <span>Miguel Barros&nbsp;</span><br />Minha conexão com a técnologia foi paixão a primeira vista, esse universo de possibilidades infinitas é muito fascinante, mostrou-me um caminho e tornou quem sou hoje.</p>
				</span>
				<SideBar />
			</main>
		</div>
	)
}