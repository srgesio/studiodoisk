import { useEffect, useState } from "react"
import styles from '../../styles/Presentation.module.css'
import { ButtonItem } from "../ButtonItem"

interface PresentationProps {
    presentationImage: {
        url: string
    }
    presentationName: string
    presentationText: string
}
async function callPresentationData() {
    return await fetch('/api/presentation', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
        .then((response) => {
            return response[0]

        })
}
export function Presentation() {
    const [presentation, setPresentation] = useState<PresentationProps>({
        presentationImage: {
            url: ''
        },
        presentationName: '',
        presentationText: ''
    })

    useEffect(() => {
        callPresentationData().then((dataPresentation) => {
            setPresentation(dataPresentation)
        })
    }, [])

    console.log(presentation)
    return (
        <div className={styles.presentationContainer}>
            <div className={styles.presentationImageContainer}>
                <img className={styles.presentationImage} src={presentation.presentationImage.url} alt={presentation.presentationName} />
            </div>
            <h2 className={styles.presentationName}>
                {presentation.presentationName}
            </h2>
            <div className={styles.presentationContent}>
                <div className={styles.presentationText} dangerouslySetInnerHTML={{ __html: presentation.presentationText }}>
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