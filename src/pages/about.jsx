import styles from './styles/About.module.scss'
import Head from 'next/head'
import Nav from '../components/nav'
import ContactsBar from '../components/contacts'

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
                </div>
            </main>
        </div>
    )
}