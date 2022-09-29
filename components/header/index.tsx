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
            />
            <Image
                src={'/logoDoisK.svg'}
                width={120}
                height={34}
            />
            <span className={styles.filler}></span>
        </header>
    )
}