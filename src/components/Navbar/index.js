import React, {useState, useEffect} from 'react'
import { NavbarData } from './NavbarData'
import { NavContainer, NavLink, NavMenu } from './NavElements'

const Navbar = () => {
    const [navlinkState, changeState] = useState({
        activeObject: {id: 0},
        objects: [{id: 0}, {id: 1}, {id: 2}, {id: 3}]
    })

    function toggleActive(index) {
        changeState({ ...navlinkState, activeObject: navlinkState.objects[index]})
    }
    function toggleActiveLink(index){
        if(navlinkState.objects[index] === navlinkState.activeObject){
            return "active"
        }else{
            return ""
        }
    }

    useEffect(() => {
        toggleActive(0)
    }, [])

  return (
    <NavContainer>
        <NavMenu>
            {NavbarData.map((item, id) => {
                return (
                    <NavLink className={toggleActiveLink(id)} 
                        onClick={() => {toggleActive(id)}}
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
    </NavContainer>
  )
}

export default Navbar