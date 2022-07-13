import { Suspense, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Canvas } from '@react-three/fiber';



import styles from './Contacts.module.scss';

import telegramImg from '../../assets/telegram.jpg';
import githubImg from '../../assets/github.jpg';
import Box from '../Box/Box';

const Contacts = () => {



    return (
        <div className={styles.Container}>
            <a className={styles.First} href='https://t.me/Kendo_ow' />
            <Canvas>
                <Box

                    scale={1}
                    size={2}
                    image={telegramImg}

                />
            </Canvas>

            <a className={styles.Second} href='https://github.com/kendoow' />
            <Canvas>
                <Box
                    scale={1}
                    size={2}
                    image={githubImg}
                />
            </Canvas>


        </div>
    )
}

export default Contacts;