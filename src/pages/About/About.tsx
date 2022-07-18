import { FC } from 'react'
import Layout from '../../components/Layout/Layout';
import AboutMain from '../../UI/AboutMain/AboutMain';
import AboutText from '../../UI/AboutText/AboutText';
import styles from './About.module.scss';

const About:FC = () => {
  return (
    <div>
        <Layout dark  >
            <div className={styles.Container}>
                <div className={styles.MainContainer}>
                  <AboutMain/>
                </div>
                <div className={styles.TextContainer}>
                    <AboutText/>
              
                </div>
            </div>
        </Layout>
    </div>
  )
}

export default About