import React from 'react';
import CoverVideo from '../component/CoverVideo';
import styled from 'styled-components';
import Logo from "../component/Logo"
import NavBar from '../component/NavBar'
 
const Section = styled.section`
position: relative;
min-height: 100vh;
overflow: hidden;
`

function Home() {
  return (
      <Section id='home'>
          < CoverVideo />
          < Logo />
          < NavBar />
      </Section>
  )
}

export default Home
