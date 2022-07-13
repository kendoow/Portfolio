import { FC } from 'react'
import ProtfolioItem from '../../components/PortfolioItem/PortfolioItem';
import styles from './ProtfolioItems.module.scss';
import githubImg from '../../assets/github.jpg';



const ProtfolioItems:FC = () => {
  return (
    <>
    <div className={styles.Container}>
        <ProtfolioItem title="Online Paint" img ={githubImg} />
        <ProtfolioItem title="Online Paint" img ={githubImg} />
    </div>
    </>
  ) 
}

export default ProtfolioItems