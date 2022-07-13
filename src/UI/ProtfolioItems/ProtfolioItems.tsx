import { FC } from 'react'
import ProtfolioItem from '../../components/PortfolioItem/PortfolioItem';
import styles from './ProtfolioItems.module.scss';
import githubImg from '../../assets/github.jpg';



const ProtfolioItems:FC = () => {
  return (
    <>
    <div className={styles.Container}>
        <ProtfolioItem stack ="ES 6 +, React, Node js, TypeScript, Redux." link='https://github.com/kendoow/board' title="Online Paint" img ={githubImg} />
        <ProtfolioItem stack ="example" link='https://github.com/kendoow/board' title="Online Paint" img ={githubImg} />
    </div>
    </>
  ) 
}

export default ProtfolioItems