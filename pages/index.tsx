import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Studio Dois.K</title>
        <meta name="description" content="Studio Dois.K" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Studio <a href="https://www.instagram.com/studiodois.k/"> DOIS.K</a>
        </h1>

        <p className={styles.description}>
          Site em Desenvolvimento
          <code className={styles.code}>studiodoisk@0.0.0</code>
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.instagram.com/sejanoda/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desenvolvido por{' '}
          <span className={styles.logo}>
            ■ NODA
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
