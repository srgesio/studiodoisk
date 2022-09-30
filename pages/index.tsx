import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ButtonItem from '../components/ButtonItem'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>

      <section className={styles.callToAction}>
        <p className={styles.callToActionText}>
          <b>Projetos de interiores</b> residencial, comercial e consultoria
        </p>

        <ButtonItem
          label='Solicite uma proposta'
          url='https://forms.gle/po1gUefDRdbdWM6S8'
          callToAction
          sizing='auto'
        />

      </section>
      <section className={styles.contactLinks}>
        <p className={styles.contactTitle}>
          Entre em contato!
        </p>
        <div className={styles.primaryContactLinks}>

          <ButtonItem
            label='Instagram'
            url='https://www.instagram.com/studiodois.k/'
            callToAction
            sizing='fullsize'
          />
          <ButtonItem
            label='Whatsapp'
            url='https://api.whatsapp.com/send?phone=5584996454664'
            callToAction
            sizing='fullsize'
          />
        </div>
        <ButtonItem
          label='studiodois.k@gmail.com '
          url=''
          sizing='fullsize'
        />

      </section>
      <section className={styles.linksListContainer}>
        <ButtonItem
          label='DOIS.K no Pinterest'
          url='https://www.pinterest.pt/studiodoisk/'
        />
        <ButtonItem
          label='DOIS.K no Facebook'
          url='https://www.facebook.com/studiodois.k'
        />
        <ButtonItem
          label='Playlist do Spotify'
          url='https://open.spotify.com/playlist/46a2ivj5hzSgYIMUuj0Tyn'
        />
        <ButtonItem
          label='Playlist do Deezer'
          url='https://www.deezer.com/playlist/7947760982'
        />
      </section>
    </Layout>
  )
}

export default Home
