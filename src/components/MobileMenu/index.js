import React from 'react'
import { NavbarData } from '../Navbar/NavbarData'
import { Menu } from './MenuElements'

const MobileMenu = () => {
  return (
    <Menu>
        <MenuContainer>
            {NavbarData.map((item, id) => {
                <MobileLink />
            })}
        </MenuContainer>
    </Menu>
  )
}

export default MobileMenu