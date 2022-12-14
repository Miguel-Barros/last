import Head from "next/head";
import ContactsBar from "../components/contacts";
import Nav from "../components/nav";
import styles from './styles/Portfolio.module.scss'

export default function Portfolio() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Portfolio</title>
            </Head>
            <Nav />
            <ContactsBar />
            <main className={styles.main}>
                <div className={styles.project}>
                    <img src="./assets/img.png" alt="" />
                    <p><span>Joker</span> Project</p>
                </div>
            </main>
        </div>
    )
}
