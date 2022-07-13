import { FC } from 'react'
import styles from './PortfolioItem.module.scss';
import github from '../../assets/github.jpg'


interface PortfolioProps {
  title: string;
  img: string;
  link: string;
  stack: string;
}

const ProtfolioItem: FC<PortfolioProps> = ({ title, img, link, stack }) => {
  return (
    <>
      <div className={styles.Container}>
        <h3 className={styles.Title}>
          {title}
        </h3>
        <img className={styles.MainIcon} src={img} alt="projectIcon" />

        <div className={styles.GitHub}>
        <h4 className={styles.Stack}>
            {stack}
          </h4>
          <a href={link}>
            <img width={40} height={40} src={github} alt="" />
          </a>
          
        </div>
      </div>
    </>
  )
}

export default ProtfolioItem