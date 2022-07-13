
import Main from '../pages/Main/Main';
import { useTransition, animated, config } from "react-spring";
import { Route, Routes, useLocation } from 'react-router-dom';
import About from '../pages/About/About';
import Portfolio from '../pages/Portfolio/Portfolio';


const Router = () => {



  const location = useLocation()
  const transitions = useTransition(location, {
    from: { opacity: 0, transition: '1s ease-out', transform: 'translateX(100%)' },
    enter: { opacity: 1, transition: '1s ease-out', transform: 'translateX(0)' },
    leave: { transform: 'translateX(-100%)', opacity: 0, transition: '0.5s ease-in',  },
    config: config.gentle,
  })


  return (

    <>
      <div style={{ overflow: 'hidden', position: 'relative', minHeight: "100vh" }}>
        {
          transitions((props, item) => (
            <animated.div style={props}>
              <div style={{ position: 'absolute', width: "100%" }}>
                <Routes location={item}>
                  <Route path='/' element={<Main />} />
                  <Route path='/portfolio' element={<Portfolio />} />
                  <Route path='/about' element={<About />} />
                </Routes>
              </div>
            </animated.div> 
          ))
        }
      </div>
    </>
  );
}

export default Router;
