import styles from './styles/Index.module.css'
import Nav from '../components/nav'
import AutoWrite from '../components/autoWrite'
import { Icon } from '@iconify/react';
import Head from 'next/head'
import ScrollBar from '../components/scrollBar';
import SideBar from '../components/sideBar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Last</title>
      </Head>
      <Nav/>
      <main className={styles.main}>
      <span className={`${styles.glass} ${styles.secundary}`}/>
      <span className={`${styles.glass}`}/>
        <div className={styles.box}>
          <AutoWrite/>
          <p>Seja bem vindo ao meu portifolio pessoal. Sinta-se livre para observar e avaliar alguns dos meus trabalhos pessoais e corporativos.</p>
        </div>
        <span className={styles.illustration}>
          <img src="./assets/ilus.svg" alt="illustration" />
        </span>
      </main>
      <footer className={styles.footer}>
        <span>
          <p>Conhecer mais</p>
          <Icon icon={'mdi:chevron-down'} className={styles.arrow}/>
        </span>
      </footer>
    </div>
  )
}

{/*<p className={styles.copy}>Miguel Barros © 2022</p>*/}