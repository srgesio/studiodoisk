import Link from 'next/link'
import styles from '../../styles/ButtonItem.module.css'


type buttonItemProps = {
    sizing?: "fullsize" | "auto";
    external?: boolean
    label: string
    url: string
    callToAction?: boolean
}

export default function ButtonItem({ external = true, url, label, sizing = 'fullsize', callToAction = false }: buttonItemProps) {

    return external ? (
        <a href={url} target='_blank' className={`${styles.buttonItem} ${callToAction ? styles.callToAction : ''} ${sizing == 'fullsize' ? styles.fullsize : ''} ${sizing == 'auto' ? styles.auto : ''}`}>
            <span className={styles.label}>
                {label}
            </span>
        </a>

    ) : (
        <Link href={url}>
            <a className={`${styles.buttonItem} ${callToAction ? styles.callToAction : ''} ${sizing == 'fullsize' ? styles.fullsize : ''} ${sizing == 'auto' ? styles.auto : ''}`}>
                <span className={styles.label}>
                    {label}
                </span>
            </a>
        </Link>
    )

}