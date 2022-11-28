import styles from './styles/About.module.scss'
import Head from 'next/head'
import Nav from '../components/nav'
import ContactsBar from '../components/contacts'
import Scroll from '../components/scroll'

export default function About() {

    return (
        <div className={styles.container}>
            <Head>
                <title>Sobre</title>
            </Head>
            <Nav />
            <ContactsBar />
            <main className={styles.main}>
                <div className={styles.left}>
                    <img src="https://avatars.githubusercontent.com/u/79284434?v=4" alt="Profile-Github" />
                    <p>Programador</p>
                    <p>Full Stack & UX Design</p>
                </div>
                <div className={styles.right}>
                    <p>Eu sou <span> Miguel de Barros </span><br />
                        Minha conexão com a tecnologia
                        foi paixão a primeira vista, esse universo de possibilidades infinitas é muito fascinante, mostrou-me um caminho e tornou quem sou hoje.
                    </p>
                </div>
            </main>
            <Scroll />
        </div>
    )
}