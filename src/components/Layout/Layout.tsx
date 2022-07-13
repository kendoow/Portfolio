import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './Layout.module.scss'

import logo from '../../assets/logo.svg'
import Copyrighted from '../Copyrighted/Copyrighted'


interface HeaderProps {
    children: React.ReactNode
}

const Layout: FC<HeaderProps> = ({ children }) => {

    return (
        <>
            <div className={styles.Container}>
                <Link to='/about' className={styles.NavLink} >
                    about
                </Link>
                <Link to='/'>
                    <img className={styles.Image} width={50} height={50} src={logo} alt="img" />
                </Link>
                <Link to='/portfolio' className={styles.NavLink}>
                    portfoilo
                </Link>
            </div>

            {children}

            <Copyrighted />
        </>
    )
}

export default Layout