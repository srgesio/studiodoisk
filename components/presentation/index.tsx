import Image from "next/image"
import { useEffect, useState } from "react"
import styles from '../../styles/Presentation.module.css'
import { ButtonItem } from "../ButtonItem"



interface PresentationProps {
    imageUrl: string
    presentationName: string
    presentationText: string
}

export function Presentation({ imageUrl, presentationName, presentationText }: PresentationProps) {


    useEffect(() => {

    }, [])

    return (
        <div className={styles.presentationContainer}>
            <div className={styles.presentationImageContainer}>
                <Image
                    src={imageUrl}
                    width={172}
                    height={172}
                    alt={presentationName}
                    className={styles.presentationImage}
                />
            </div>
            <h2 className={styles.presentationName}>
                {presentationName}
            </h2>
            <div className={styles.presentationContent}>
                <div className={styles.presentationText} dangerouslySetInnerHTML={{ __html: presentationText }}>
                </div>
                <div className={styles.presentationCta}>
                    <ButtonItem
                        url="#"
                        callToAction
                    >
                        Conheça os projetos
                    </ButtonItem>
                </div>
            </div>

        </div>
    )
}


