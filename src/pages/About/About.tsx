import { FC } from 'react'
import Layout from '../../components/Layout/Layout';
import AboutItem from '../../UI/AboutText/AboutText';
import styles from './About.module.scss';

const About:FC = () => {
  return (
    <div>
        <Layout >
            <div className={styles.Container}>
                <p>1</p>
                <div className={styles.TextContainer}>
                    <AboutItem/>
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default About