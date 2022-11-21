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
            </main>
        </div>
    )
}