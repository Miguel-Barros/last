import styles from './styles/Index.module.scss'
import Head from 'next/head'
import Nav from '../components/nav'
import AutoWrite from '../components/autoWrite'
import { Icon } from '@iconify/react'

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Last</title>
      </Head>
      <Nav />
      <main className={styles.main}>
        {/* <img className={styles.arrow_line} src="./assets/arrow-line.svg" alt="Last" /> */}
        <span className={styles.left}>
          <AutoWrite />
          <p>Seja bem vindo ao meu portifolio pessoal. Sinta-se livre para observar e avaliar alguns dos meus trabalhos pessoais e corporativos.</p>
        </span>
        <span className={styles.right}>
          <img className={styles.illustration} src="./assets/ilustration-index.svg" alt="Last" />
        </span>
      </main>
      <footer className={styles.footer}>
        <p>Conhecer mais <br />
          <Icon icon="material-symbols:keyboard-arrow-down-rounded" className={styles.arrow} />
        </p>
      </footer>
    </div>
  )
}

{/*<p className={styles.copy}>Miguel Barros © 2022</p>*/ }