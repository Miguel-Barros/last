import styles from './styles/Index.module.scss'
import Head from 'next/head'
import Nav from '../components/nav'
import Scroll from '../components/scroll'

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
          <h2 className={styles.title}>Sou desenvolvedor <br />
            <span>Full Stack</span></h2>
          <p>Seja bem vindo ao meu portifolio pessoal. Sinta-se livre para observar e avaliar alguns dos meus trabalhos pessoais e corporativos.</p>
        </span>
        <span className={styles.right}>
          <img className={styles.illustration} src="./assets/ilustration-index.svg" alt="Last" />
        </span>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

{/*<p className={styles.copy}>Miguel Barros © 2022</p>*/ }