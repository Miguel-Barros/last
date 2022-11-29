import styles from './styles/Skills.module.scss'
import Head from 'next/head'
import Nav from '../components/nav'
import ContactsBar from '../components/contacts'
import Scroll from '../components/scroll'
import { Icon } from '@iconify/react'

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
              <Icon icon="mdi:sass" className={styles.skill_icon} />
              <p className={styles.skill_name}>Sass</p>
            </div>
            <div className={styles.skill}>
              <Icon icon="mdi:react" className={styles.skill_icon} />
              <p className={styles.skill_name}>React</p>
            </div>
            <div className={styles.skill}>
              <Icon icon="fa-brands:js-square" className={styles.skill_icon} />
              <p className={styles.skill_name}>Javascript</p>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.skill}>
              <Icon icon="mdi:firebase" className={styles.skill_icon} />
              <p className={styles.skill_name}>Firebase</p>
            </div>
            <div className={styles.skill}>
              <Icon icon="mdi:language-python" className={styles.skill_icon} />
              <p className={styles.skill_name}>Python</p>
            </div>
            <div className={styles.skill}>
              <Icon icon="cib:next-js" className={styles.skill_icon} />
              <p className={styles.skill_name}>Next.js</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
