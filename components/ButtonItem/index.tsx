import Link from 'next/link'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from '../../styles/ButtonItem.module.css'


interface buttonItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {

    url: string
    className?: string
    callToAction?: boolean
    children: ReactNode
    fullWidth?: boolean
    instagram?: boolean
    whatsapp?: boolean
}

export function ButtonItem({ url, callToAction, children, fullWidth, instagram, whatsapp }: buttonItemProps) {
    return (
        <Link href={url}>
            <a className={
                `
                ${styles.buttonItem}
                ${callToAction ? styles.callToAction : ''}
                ${fullWidth ? styles.fullWidth : styles.auto}
                ${instagram ? styles.instagram : ''}
                ${whatsapp ? styles.whatsapp : ''}

                `}>
                {children}
            </a>
        </Link>
    )

}