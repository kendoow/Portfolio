import { FC } from 'react'
import styles from './AboutTextItem.module.scss'

export interface AboutProps{
    title:string;
    description:string;
}

const AboutText: FC<AboutProps> = ({title,description}) => {
    return (
        <>
            <div className={styles.Container}>
                <h2 className={styles.Title}>
                    {title}:
                </h2>
                <h4 className={styles.Description}>{description}</h4>
            </div>
        </>
    )
}

export default AboutText