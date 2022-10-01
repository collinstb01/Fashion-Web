import {ThemeProvider} from "styled-components"
import GlobalStyles from './styles/GlobalStyles';
import {LocomotiveScrollProvider} from 'react-locomotive-scroll';
import {dark} from "./styles/Theme"
import "locomotive-scroll/dist/locomotive-scroll.css"
import Home from './sections/Home'
import React, {useState, useEffect} from "react";
import {useRef} from 'react'
import { AnimatePresence } from "framer-motion"
import About from './sections/About'
import Shop from './sections/Shop'
import Banner from './sections/Banner'
import Newarrival from './sections/Newarrival'
import Footer from './sections/footer'
import Loader from './component/Loader'
import ScrollTriggerProxy from "./component/ScrollTriggerProxy"

function App() {

  const containerRef = useRef(null)

   const [loader, setLoader] = useState(false);

   useEffect(() => { 
     setTimeout(() => {
       setLoader(true);
     }, 3000);
   }, []) 

   
  return (
    <>
    < GlobalStyles />
         < ThemeProvider theme={dark}>
          <LocomotiveScrollProvider
          options={
            {
              smooth: true,
            
            smartphone: {
              smooth: true,
            },

            tablet: {
              smooth: true,
            }
          }
        }
          watch={
            [

            ]
          }
          containerRef={containerRef}
          >
           < AnimatePresence>
            { loader ? null : < Loader />}
           </AnimatePresence>
          <ScrollTriggerProxy />
          <AnimatePresence>
          <main className="App" data-scroll-container ref={containerRef}>
            < Home />
              < About />
              < Shop />
              < Banner />
             < Newarrival />
              < Footer />
              </main>
          </AnimatePresence>
          </LocomotiveScrollProvider>
       </ThemeProvider>
    </>
  );
}

export default App;
