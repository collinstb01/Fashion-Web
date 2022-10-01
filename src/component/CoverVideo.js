import React from 'react'
import Video from "../assets/Walking Girl.mp4"
import styled from 'styled-components'
import {motion} from "framer-motion"

const VideoCtn = styled.section`
width: 100%;
height: 100vh;
position: relative;

video {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  
  @media (max-width: 48em) {
    object-position: center 10%;
  }

   @media (max-width: 38em) {
    object-position: center 5 0%;
  }
}
`
const DarkOverlay = styled.div`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 1;

background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
`
const Title = styled(motion.div)`
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
z-index: 5;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
align-items: center;
color: ${props => props.theme.text};

div {
  display: flex;
  flex-direction: row;
}

h1{
  font-family: "Kaushan Script";
  font-size: ${props => props.theme.fontBig};
  text-shadow: 1px 1px 1px ${props => props.theme.body};

   @media (max-width: 30em) {
    font-size: calc(5rem + 8vw);
  }
}
h2{
  font-family: "Sirin Stencil";
  font-size: ${props => props.theme.fontlg};
  text-shadow: 1px 1px 1px ${props => props.theme.body};
  font-weight: 300;
  text-transform: uppercase;
   @media (max-width: 30em) {
  font-size: ${props => props.theme.fontmd};
  margin-top: -1 .5rem; 
  }
}
`
const Container = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 5,
      staggerChildren: 0.3,
    }
  },
}
const item = {
  initial: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
}
function CoverVideo() {
  return (
    <VideoCtn>
      <Title variants={Container} initial="initial" animate="show">
        <div>
          <motion.h1 variants={item} data-scroll data-scroll-speed="4" data-scroll-delay="0.13">s</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-speed="4" data-scroll-delay="0.13">o</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-speed="4" data-scroll-delay="0.09">n</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-speed="4" data-scroll-delay="0.06">i</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-speed="4" data-scroll-delay="0.05">e</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-speed="4" data-scroll-delay="0.04">S</motion.h1>
        </div>
        <motion.h2 variants={item} data-scroll data-scroll-speed="4" data-scroll-delay="0.04">Inspire, Create, Believe</motion.h2>
      </Title>
      < DarkOverlay />
    < video src={Video} type="video/mp4" autoPlay muted loop/>
    </VideoCtn>
  )
}

export default CoverVideo
