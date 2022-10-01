import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const NavContainer = styled(motion.div)`
width: 100vw;
position: absolute; 
top: ${props => props.click ? '0' : '-5rem'};
z-index: 6;
display: flex;
justify-content: center;
align-items: center;

transition: all 0.3s ease;

@media (max-width: 40em) {
top: ${props => props.click ? '0' : 'calc(-50vh - 4rem)'};
}
`

const MenuItems = styled(motion.ul)`
position: relative;
background-color: ${props => props.theme.body};
height: ${props => props.theme.navHeight};
color: ${props => props.theme.text};
list-style: none;

display: flex;
justify-content: space-between;
align-items: center;

font-size: ${props => props.theme.fontmd};
font-weight: 600;
text-transform: uppercase;

width: 100%;
padding: 0 10rem;

@media (max-width: 40em) {
 flex-direction: Column; 
 padding: 2rem 0;
 height: 50vh;
}
`

const Menubtn = styled.li`
background-color: ${props => `rgba(${props.theme.textRgba}, 0.7)`};
color: ${props => props.theme.body};
list-style-type: none;
height: 2.5rem;
width: 15rem;
display:flex;
clip-path: polygon(0 0, 100% 0, 80% 100%,20% 100%);
position: absolute;
top: 100%;
left: 50%;
transform: translateX(-50%);
align-items: center;
justify-content: center;

font-size: ${props => props.theme.fontmd};
font-weight: 600;
text-transform: uppercase;

cursor: pointer;

@media (max-width: 40em) {
width: 10rem;
height: 2rem;
}
`
const MenuItem = styled(motion.li)`
text-transform: uppercase;
color: ${ props => props.theme.text };
cursor: pointer;

@media (max-width: 40em) {
 flex-direction: Column; 
 padding: 0.5rem 0;
}
`


function NavBar() {
    const [click, setClick] = React.useState(false)


    const { scroll } = useLocomotiveScroll();

    const handleScroll = (id) => {
        let elem = document.querySelecot(id);
setClick(!click);
        scroll.scrollTo(elem,
            {
                offset: '-100',
                duration: '2000',
                easing: [0.25, 0.0, 0.35, 1.0],
            }
        )
    }


return (
    <NavContainer click={click}
    initial={{
        y: "-100%",
    }}
    animate={{
        y: 0,
    }}
    transition= {{
        duration: 2,
        delay: 5, 
    }}
    >
        <MenuItems
        drag="y"
        dragConstraints={{
            top: 0,
            bottom: 70,
        }}
        dragElastic={0.05}
        dragSnapToOrigin
        >
            <Menubtn onClick={() => setClick(!click)}>Menu</Menubtn>
            <MenuItem
            whileHover={{scale:1.1,y: -5}}
            whileTap={{scale:0.9,Y: 0}}
            onClick={() => handleClick('#home')}
            >Home</MenuItem>
            <MenuItem
            whileHover={{scale:1.1,Y: -5}}
            whileTap={{scale:0.9,Y: 0}}
            onClick={() => handleClick('#about')}
            >about</MenuItem>
            <MenuItem
            whileHover={{scale:1.1,Y: -5}}
            whileTap={{scale:0.9,Y: 0}}
            onClick={() => handleClick('#shop')}
            >shop</MenuItem>
            <MenuItem
            whileHover={{scale:1.1,Y: -5}}
            whileTap={{scale:0.9,Y: 0}}
            onClick={() => handleClick('#new')}
            >new arrival</MenuItem>
        </MenuItems>
    </NavContainer>
  )
}

export default NavBar