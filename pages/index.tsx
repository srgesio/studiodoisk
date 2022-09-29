import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      <p className={styles.description}>
        Site em Desenvolvimento
      </p>
    </Layout>
  )
}

export default Home
