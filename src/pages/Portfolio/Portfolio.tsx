import { FC } from 'react'
import Layout from '../../components/Layout/Layout'
import ProtfolioItems from '../../UI/ProtfolioItems/ProtfolioItems'
import styles from './Portfolio.module.scss'

const Portfolio: FC = () => {
    return (
        <>
            <Layout>
                <div className={styles.Container}>
                    <h2>Recent Projects</h2>

                    
                        <ProtfolioItems/>
                   
                </div>
            </Layout>
        </>
    )
}

export default Portfolio