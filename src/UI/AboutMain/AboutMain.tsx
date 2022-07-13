import { FC } from 'react'
import Contacts from '../../components/Contacts/Contacts'
import styles from './AboutMain.module.scss'


const AboutMain: FC = () => {
    return (
        <>
            <div className={styles.Container}>
                <h2 className={styles.About}>
                    Front-end Developer
                    <br />
                    From Moscow.
                </h2>
                <Contacts />
            </div>
        </>
    )
}

export default AboutMain