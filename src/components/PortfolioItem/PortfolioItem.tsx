import { FC } from 'react'
import styles from './PortfolioItem.module.scss';

interface PortfolioProps{
    title:string;
    img:string;
}

const ProtfolioItem:FC<PortfolioProps> = ({title,img}) => {
  return (
    <>
    <div className={styles.Container}>
        <h3 className={styles.Title}>
            {title}
        </h3>
       <img width={300} height={200} src={img} alt="projectIcon" />
       
    </div>
    </>
  )
}

export default ProtfolioItem