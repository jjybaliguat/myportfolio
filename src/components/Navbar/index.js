import React, {useState, useEffect} from 'react'
import { NavbarData } from './NavbarData'
import { Bars, BtnCv, MenuContainer, MenuIcon, MobileLink, MobileMenu, NavBar, NavLink, NavLogo, NavMenu } from './NavElements'

const Navbar = () => {
    const [clicked, setClicked] = useState(false)
    const toggleMenuIcon = () => setClicked(!clicked)
    const [scrolled, setScrolled] = useState(false)

    const onScroll = () => {
        if(window.scrollY > 50){
            setScrolled(true)
        }else{
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

  return (
    <>
        <NavBar scrolled={scrolled ? 'true' : ''}>
            <NavLogo to="home"
                spy={true} 
                smooth={true}
                exact="true"
                duration={500}>
                JUST-IN <i className="fa-solid fa-code"></i>
            </NavLogo>
            <NavMenu clicked={clicked? 'true' : ''}>
                {NavbarData.map((item, id) => {
                    return (
                        <NavLink
                            key={id} 
                            to={item.path}
                            spy={true} 
                            smooth={true}
                            exact="true"
                            offset={-70}
                            duration={500}
                            >
                            {item.title}
                        </NavLink>
                    )
                })} 
            </NavMenu>

            <BtnCv onClick={() => {alert("clck")}}>Download CV <i className="fa-solid fa-download"></i></BtnCv>
            <MenuIcon onClick={toggleMenuIcon}>
                    <Bars className={clicked? 'fas fa-times' : 'fa-solid fa-bars'}> </Bars>
            </MenuIcon>
        </NavBar>
        <MobileMenu active={clicked? 'true' : ''}>
            <MenuContainer>
                {NavbarData.map((item, id) => {
                    return (
                        <MobileLink
                            key={id} 
                            to={item.path}
                            spy={true} 
                            smooth={true}
                            exact="true"
                            offset={-60}
                            duration={500}
                            onClick={toggleMenuIcon}
                        >
                            {item.title}
                        </MobileLink>
                    )
                })}
            </MenuContainer>
        </MobileMenu>
    </>
  )
}

export default Navbar