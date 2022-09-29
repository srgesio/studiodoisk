import styles from '../../styles/Footer.module.css'


type footerProps = {
}

export default function Footer({ }: footerProps) {

    return (
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
    )
}