import * as THREE from 'three';

import { useFrame, useLoader } from "@react-three/fiber";
import { FC, useEffect, useRef, useState } from "react";
import { config, useSpring, animated } from '@react-spring/three';

export interface ContactsProps {
    name: string;
    setRoute: any;
    image: string;
}


const Contacts: FC<ContactsProps> = ({ setRoute,
    name,
    image,
    ...props }) => {

    const ref: any = useRef(null)
    const [hover, setHover] = useState(false)

    useEffect(() => {
        document.body.style.cursor = hover ? 'pointer' : 'auto'
    }, [hover])

    const handlerPointerOver = () => {
        setHover(true)
    }
    const handlerPointerOut = () => {
        setHover(false)
    }
    const { scale } = useSpring({
        scale: hover ? 1.2 : 1,
        config: config.wobbly
    })

    const handlerClick = () => {
        switch (name) {
            case 'telegram':
                setRoute('telegram')
                break
            case 'github':
                setRoute('github')
                break
            default:
                console.log('Error - Name')
        }
    }

    const [texture] = useLoader(THREE.TextureLoader, [image])

    useFrame(({ clock }) => {
        if (!hover) {
            ref.current.rotation.x =
                ref.current.rotation.y =
                ref.current.rotation.z =
                Math.cos(clock.getElapsedTime() / 8) * Math.PI
        }
    })

    return (
        <mesh
            ref={ref}
            scale={scale}
            onPointerOver={handlerPointerOver}
            onPointerOut={handlerPointerOut}
            onClick={handlerClick}
            {...props}>
            <boxGeometry args={[0.3, 0.3]} />
            <meshStandardMaterial map={texture} color='#000' />
        </mesh>
    )
}

export default Contacts