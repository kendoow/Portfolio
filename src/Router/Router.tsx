import Main from '../pages/Main/Main';
import { useTransition, animated, config } from "react-spring";
import { Route, Routes, useLocation } from 'react-router-dom';
import About from '../pages/About/About';


const Router = () => {



  const location = useLocation()
  const transitions = useTransition(location, {
    from: { opacity: 0.0, transition: '5s ease-in-out', transform: 'scale(0.0)' },
    enter: { opacity: 1, transition: '3s ease-out', transform: 'scale(1)' },
    leave: { opacity: 0.0,transition: '1s ease-out', transform: 'scale(0)' },
    config: config.gentle,
  })


  return (
    <>
      <div style={{ overflowX: 'hidden', }}>
        {
          transitions((props, item) => (
            <animated.div style={props}>
              <Routes location={item}>
                <Route path='/' element={<Main />} />
                <Route path='/portfolio' element={<Main />} />
                <Route path='/about' element={<About />} />
              </Routes>
            </animated.div>
          ))
        }
      </div>
    </>
  );
}

export default Router;
