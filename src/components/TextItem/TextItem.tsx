import { FC } from 'react'

import styles from './TextItem.module.scss';


const TextItem: FC = () => {
    return (
        <>  

        
            <div className={styles.Container}>
                <div className={styles.Title}>
                    <h2 className={styles.First}>DEVELOPER.</h2>
                    <h2 className={styles.Second}>STUDENT.</h2>
                    <h2 className={styles.Third}>THINKER.</h2>
                </div>
                <div>
                    <h3>
                        18 years old enthusiastic boy.
                        <br/>
                        Currently looking for a job.
                    </h3>
                </div>

            </div>
        </>
    )
}

export default TextItem