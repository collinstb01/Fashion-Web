import React, {useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import styled from 'styled-components'
import img1 from '../assets/Images/11.webp'
import img2 from '../assets/Images/12.webp'
import img3 from '../assets/Images/13.webp'
import img4 from '../assets/Images/14.webp'


const Section = styled.section`
min-height: 100vh;
width: 100vw;
margin: 0 auto;
overflow: hidden;

display: flex;
justify-content: center;
align-items: center;

position: relative;

/* background-color: yellow; */
`
const Overlay = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50% );
width: 30vw;
height: 90vh;

box-shadow: 0px 0px 0px 4vw ${props => props.theme.text};
border: 3px solid ${props => props.theme.body};
z-index: -20;


@media (max-width: 70em) {
width: 40vw;
height: 80vh;
}
@media (max-width: 64em) {
    width: 50vw;
box-shadow: 0px 0px 0px 60vw ${props => props.theme.text};
}
@media (max-width: 40em) {
    width: 60vw;
}
@media (max-width: 30em) {
width: 80vw;
height: 60vh;
}
`
const Title = styled.h1`
font-size: ${props => props.theme.fontxxxl};
text-shadow: 1px 1px 1px ${props => props.theme.body};
font-family: "Kaushan Script";
font-weight: 300;

color: ${props => props.theme.body};
position: absolute;
top: 1rem;
left: 5%;
z-index: 23;

@media (max-width: 64em) {
font-size: ${props => props.theme.fontxxl};
}
@media (max-width: 40em) {
font-size: ${props => props.theme.fontxl};

}
`
const Text = styled.div`
width: 20%;
font-size: ${props => props.theme.fontlg};
position: absolute;
padding: 2rem;
top: 0;
right: 0;
font-weight: 300;


@media (max-width: 40em) {
display: none;
}
`
const Container = styled.div`
position: absolute;

top: 0%;
left: 50%;
transform: translate(-50%, 0);
width: 25vw;
height: auto;

/* width: 65%; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 64em) {
width: 30vw;
}
@media (max-width: 40em) {
width: 40vw;
}
@media (max-width: 30em) {
width: 60vw;
}
`
const Items = styled.div`
display: flex ;

flex-direction: column;
justify-content: center;
align-items: center;
margin: 5rem 0;
img {
     width: 100%;
     height: auto;
     z-index: 50; 
}
`

function Product({ img, title = ' ' }) {
    return (

        <Items>
            <img src={img} alt={title} />
            <h2>{title}</h2>
        </Items>
    )
}
function Newarrival() {

    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef(null);
    const VerticalRef = useRef(null);

    useLayoutEffect(() => {
        let element = ref.current;
        let scrollingElement = VerticalRef.current;

       

        let t1 = gsap.timeline();

        setTimeout(() => {
            t1.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top top',
                    end: 'bottom+=100% top+=100%',
                    scroller: '.App',
                    scrub: true,
                    pin: true,
                },
                ease: 'none',
            })

            t1.fromTo(scrollingElement, {
                    y: '0',
            },
            {
                y: '-100%',
                scrollTrigger: {
                    trigger: scrollingElement,
                    start: 'top top',
                    end: 'bottom top',
                    scroller: '.App',
                    scrub: true,

                     
                },
                 
            })
            ScrollTrigger.refresh();
        }, 1000)

        return () => {
t1.kill();
ScrollTrigger.kill();
        };
    }, [])

  return (
      <Section ref={ref} id='new'>
          < Overlay />
          < Title data-scroll data-scroll-speed="-2"
          data-scroll-direction="horizontal"
          >
              New Arrival
          </Title>
          <Container ref={VerticalRef}>
              < Product img={img1} title="Man Basics" />
              < Product img={img2} title="Tops" />
              < Product img={img3} title="Sweatshirts" />
              < Product img={img4} title="Ethnic Wear" />
           </Container >
          <Text data-scroll  data-scroll-speed="-4" >
              New Arrival:
              There is new collection available for cool clothes in all sizes.
              This collection is a great way to find a new look for you.
              It offers a variety of cool apparel styles to fit your taste, while you can also find some cool clothes that you can wear everyday.
              <br />
              <br />
              The first line of clothing you will see on this collection is for men.
              The collection also includes three new styles for women.

              Give it a try and experience a new look.

          </Text>
    </Section>
  )
}

export default Newarrival