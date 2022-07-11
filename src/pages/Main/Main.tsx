import { Canvas } from '@react-three/fiber'
import { FC, useState } from 'react'

import Box from '../../components/Box/Box'
import Layout from '../../components/Layout/Layout'
import TextItem from '../../components/TextItem/TextItem'

import styles from './Main.module.scss'


const Main: FC = (): JSX.Element => {
  const [route, setRoute] = useState('')

  return (
    <>

      <Layout>
        <div className={styles.MainContainer}>
          <div className={styles.Container}>

            <TextItem />

            <Canvas>

              <Box color='black' size={2.5} />
            </Canvas>

          </div>

        </div>
      </Layout>


    </>

  )
}

export default Main