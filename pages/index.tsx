import type { NextPage } from 'next'

import Image from 'next/image'
import { ButtonItem } from '../components/ButtonItem'
import Layout from '../components/layout'
import { SliderGallery } from '../components/slider'
import { Presentation } from '../components/presentation'
import { getPresentationAPI, getBannersAPI } from '../lib/api'
import styles from '../styles/Home.module.css'
export async function getStaticProps() {
  const presentation = await getPresentationAPI()
  const banners = await getBannersAPI()

  return {
    props: {
      presentation: presentation,
      banners: banners,
    },
  }
}

const Home: NextPage = ({ presentation: presentationData, banners: bannersData }: any) => {
  const presentation = presentationData[0]
  const banners = bannersData

  return (
    <Layout>
      <section className={styles.callToAction}>
        <p className={styles.callToActionText}>
          <b>Projetos de interiores</b> residencial, comercial e consultoria
        </p>

        <ButtonItem
          url='https://forms.gle/po1gUefDRdbdWM6S8'
          callToAction
        >
          Solicite uma proposta
        </ButtonItem>

      </section>
      <SliderGallery
        banners={banners}
      />
      <Presentation
        imageUrl={presentation.presentationImage.url}
        presentationName={presentation.presentationName}
        presentationText={presentation.presentationText}
      />
      <section className={styles.contactLinks}>
        <p className={styles.contactTitle}>
          Entre em contato!
        </p>
        <div className={styles.primaryContactLinks}>

          <ButtonItem
            url='https://www.instagram.com/studiodois.k/'
            fullWidth
            instagram
          >
            Instagram
          </ButtonItem>
          <ButtonItem
            url='https://api.whatsapp.com/send?phone=5584996454664'
            fullWidth
            whatsapp
          >
            Whatsapp
          </ButtonItem>
        </div>
        <ButtonItem
          url=''
          fullWidth
        >
          <Image
            src={'/icons/Email.svg'}
            width={24}
            height={24}
            alt={"Email icon"}
          />
          studiodois.k@gmail.com
        </ButtonItem>

      </section>
      <section className={styles.linksListContainer}>
        <ButtonItem
          fullWidth
          url='https://www.pinterest.pt/studiodoisk/'
        >
          DOIS.K no Pinterest
        </ButtonItem>
        <ButtonItem
          fullWidth
          url='https://www.facebook.com/studiodois.k'
        >
          DOIS.K no Facebook
        </ButtonItem>
        <ButtonItem
          fullWidth
          url='https://open.spotify.com/playlist/46a2ivj5hzSgYIMUuj0Tyn'
        >
          Playlist do Spotify
        </ButtonItem>
        <ButtonItem
          fullWidth
          url='https://www.deezer.com/playlist/7947760982'
        >
          Playlist do Deezer
        </ButtonItem>
      </section>
    </Layout>
  )
}

export default Home
