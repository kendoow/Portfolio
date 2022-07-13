import { Canvas } from '@react-three/fiber'
import { FC } from 'react'

import Box from '../../components/Box/Box'
import Layout from '../../components/Layout/Layout'
import TextItem from '../../components/TextItem/TextItem'

import styles from './Main.module.scss'
import githubImg from '../../assets/github.jpg';

const Main: FC = (): JSX.Element => {


  return (
    <>

      <Layout>
        <div className={styles.MainContainer}>
          <div className={styles.Container}>

            <TextItem />

            <Canvas>

              <Box image={githubImg} color='black' size={2.5} />
            </Canvas>

          </div>

        </div>
      </Layout>


    </>

  )
}

export default Main