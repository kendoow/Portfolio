import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Layout.module.scss'

import logo from '../../assets/logo.svg'
import Copyrighted from '../Copyrighted/Copyrighted'


interface HeaderProps {
    children: React.ReactNode,
    dark?: boolean
}

const Layout: FC<HeaderProps> = ({ children, dark }) => {

    const date = new Date();


    return (
        <>
            <div className={dark ? styles.DarkContainer : styles.Container}>
                <Link to='/about' className={dark ? styles.NavLinkDark : styles.NavLink} >
                    about
                </Link>
                <Link to='/'>

                    <svg className={styles.Image} version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="50px" height="50px" viewBox="0 0 200.000000 200.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
                            fill={dark ? "#fff" : "#000"} stroke="none">
                            <path d="M957 1767 c-136 -78 -245 -146 -244 -150 1 -5 110 -70 242 -146 l240
-137 8 -284 c4 -156 10 -286 12 -288 2 -2 114 60 249 138 l246 143 0 136 c0
75 -3 206 -6 291 l-7 155 -206 118 c-113 64 -224 128 -247 142 l-41 24 -246
-142z"/>
                            <path d="M378 1423 l-248 -145 0 -143 c0 -78 3 -209 6 -291 l7 -149 241 -138
c133 -75 245 -137 249 -137 4 0 7 129 7 288 l0 287 228 132 c125 73 236 139
246 146 16 12 -8 28 -229 155 -136 78 -250 142 -253 141 -4 0 -118 -66 -254
-146z"/>
                            <path d="M1451 815 c-177 -104 -249 -141 -260 -135 -9 4 -119 67 -245 139
-125 72 -232 131 -237 131 -10 0 -12 -426 -3 -516 l7 -59 245 -140 c135 -77
250 -139 256 -137 6 2 120 67 254 145 l242 141 0 288 c0 158 -3 288 -7 287 -5
0 -118 -65 -252 -144z"/>
                        </g>
                    </svg>
                </Link>
                <Link to='/portfolio' className={dark ? styles.NavLinkDark : styles.NavLink}>
                    portfoilo
                </Link>
            </div>

            {children}

            <p className={dark ? styles.DateDark : styles.Date}>
                © {date.getFullYear()} Vadim Khidirov.
            </p>

        </>
    )
}

export default Layout