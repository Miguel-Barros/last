import styles from './styles/Skills.module.scss'
import Head from 'next/head'
import Nav from '../components/nav'
import ContactsBar from '../components/contacts'
import Scroll from '../components/scroll'

export default function skills() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skills</title>
      </Head>
      <Nav />
      <ContactsBar />
      <main className={styles.main}>
        <p>Essas são algumas das <span> principais </span> tecnologias que tenho <span> afinidade </span></p>
        <div className={styles.skills_group}>
        <div className={styles.row}>
            <div className={styles.skill}>
            </div>
            <div className={styles.skill}>
            </div>
            <div className={styles.skill}>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.skill}>
            </div>
            <div className={styles.skill}>
            </div>
            <div className={styles.skill}>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
