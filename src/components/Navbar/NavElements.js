import styled from "styled-components";
import { Link as LinkS } from 'react-scroll'

export const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    position: sticky;
    z-index: 999;
`
export const NavMenu = styled.ul`
    display: flex;
`
export const NavLink = styled(LinkS)`
    list-style-type: none;
    margin-left: 2rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &.active{
        color: dodgerblue;
    }
`