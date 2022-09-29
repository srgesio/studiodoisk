import Head from "next/head"
import styles from '../../styles/Layout.module.css'
import Footer from "../footer"
import Header from "../header"

type layoutProps = {
    children: React.ReactNode
}
export default function Layout({
    children
}: layoutProps) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Studio Dois.K</title>
                <meta name="description" content="Studio Dois.K" />
                <link rel="icon" href="/icon2k.svg" />

            </Head>
            <Header />

            <main>{children}</main>
            <Footer />
        </div>
    )
}