import styles from '../../styles/Header.module.css'
import Image from "next/image"
type headerProps = {
}

export default function Header({ }: headerProps) {

    return (
        <header className={styles.header}>
            <Image
                src={'/icons/Menu.svg'}
                width={48}
                height={48}
                alt={"Menu icon"}
            />
            <Image
                src={'/logoDoisk.svg'}
                width={120}
                height={34}
                alt={"Logotipo DOIS.K"}
            />
            <span className={styles.filler}></span>
        </header>
    )
}