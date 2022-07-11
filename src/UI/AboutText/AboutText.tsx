import { FC } from 'react'
import AboutTextItem from '../../components/AboutTextItem/AboutTextItem'
import styles from './AboutText.module.scss'


const AboutItem: FC = () => {
    return (
        <>
            <div className={styles.Container}>
                <AboutTextItem title='Main Tecnology Stack' description='Es 6 +, React, Node js, TypeScript, Redux.' />
                <AboutTextItem title='The most important thing in life is' description='Growth of personal mastery and creation of masterpieces. Acknowledging your achievements and having them acknowledged by others.' />
                <AboutTextItem title='The most important thing about people is' description='Honesty, openness and straightforwardness.' />
                <AboutTextItem title='In my free time' description=' I explore new technologies and principles that appear in software development' />
            </div>
        </>
    )
}

export default AboutItem