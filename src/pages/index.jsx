import styles from './styles/Index.module.scss'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Last</title>
      </Head>
      <main className={styles.main}>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

{/*<p className={styles.copy}>Miguel Barros © 2022</p>*/ }