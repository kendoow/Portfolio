import { FC } from 'react'
import styles from './Copyrighted.module.scss'

const Copyrighted: FC = () => {

    const date = new Date();
    return (
        <>

            <p className={styles.P}>
                © {date.getFullYear()} Vadim Khidirov.
            </p>

        </>
    )
}

export default Copyrighted