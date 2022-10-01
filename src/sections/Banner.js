import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
min-height: 100vh;
width: 100vw;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;

@media (max-width: 40em) {
  width: 90vw;
}
`
const Container = styled.div`
min-height: 100vh;

display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

@media (max-width: 64em) {
    justify-content: center;
}
`
const BannerComponent = styled.h1`
font-size: ${props => props.theme.fontxxxl};
 font-family: 'Kaushan Script';
 color: ${props => props.theme.text};
 white-space: nowrap;
 text-transform: uppercase;
line-height: 1;
@media (max-width: 70em) {
font-size: ${props => props.theme.fontxxl};
}
@media (max-width: 64em) {
margin: 1rem 0;
}
@media (max-width: 40em) {
font-size: ${props => props.theme.fontlg};
margin: 0.5rem 0;
}
@media (max-width: 30em) {
font-size: ${props => props.theme.fontmd};
}
span {
    display: block;
    background-color: ${props => props.theme.body};
    padding: 1rem 2rem;
}
`

function Banner() {
  return (
    <Section>
            <Container id="up">
                <BannerComponent>
                    <span
                    data-scroll data-scroll-direction="horizontal"
                      data-scroll-target="#up"
                      data-scroll-speed="8"
                    >Fashion is an armour</span>
                </BannerComponent>
              <BannerComponent>
                  <span
                  data-scroll data-scroll-direction="horizontal"
                  data-scroll-speed="-6"
                  data-scroll-target="#up"
                  >to survive  everyday life</span>
              </BannerComponent>
              <BannerComponent>
                  <span
                      data-scroll data-scroll-direction="horizontal"
                      data-scroll-speed="-4"
                      data-scroll-target="#up"
                  >one is not too</span>
              </BannerComponent>
              <BannerComponent>
                  <span
                  data-scroll data-scroll-direction="horizontal"
                  data-scroll-speed="6"
                  data-scroll-target="#up"
                  >over-dressed or</span>
              </BannerComponent>
              <BannerComponent>
                  <span
                  data-scroll data-scroll-direction="horizontal"
                  data-scroll-speed="-4"
                  data-scroll-target="#up"
                  >WIth a little blacok dress</span>
              </BannerComponent>
            </Container>
    </Section>
  )
}

export default Banner
