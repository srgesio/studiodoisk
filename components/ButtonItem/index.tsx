import Link from 'next/link'
import styles from '../../styles/ButtonItem.module.css'


type buttonItemProps = {
    sizing?: "fullsize" | "auto";
    external?: boolean
    label: string
    url: string
}

export default function ButtonItem({ external = true, url, label, sizing = 'fullsize' }: buttonItemProps) {

    return external ? (
        <a href={url} target='_blank' className={`${styles.buttonItem} ${sizing == 'fullsize' ? styles.fullsize : ''} ${sizing == 'auto' ? styles.auto : ''}`}>
            <span className={styles.label}>
                {label}
            </span>
        </a>

    ) : (
        <Link href={url}>
            <a className={`${styles.buttonItem} ${sizing == 'fullsize' ? styles.fullsize : ''} ${sizing == 'auto' ? styles.auto : ''}`}>
                <span className={styles.label}>
                    {label}
                </span>
            </a>
        </Link>
    )

}