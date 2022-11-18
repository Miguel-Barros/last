import styles from './styles/Index.module.scss'
import Head from 'next/head'
import Nav from '../components/nav'

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Last</title>
      </Head>
      <Nav />
      <main className={styles.main}>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

{/*<p className={styles.copy}>Miguel Barros © 2022</p>*/ }