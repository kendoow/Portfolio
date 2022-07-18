import { FC } from 'react'
import Contacts from '../../components/Contacts/Contacts'
import styles from './AboutMain.module.scss'


const AboutMain: FC = () => {
    return (
        <>
            <div className={styles.Container}>
                <h4 className={styles.About}>
                    Front-end Developer
                    <br />
                    from Moscow.
                </h4>
                <Contacts />
            </div>
        </>
    )
}

export default AboutMain