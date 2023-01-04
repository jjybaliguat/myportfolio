import styled from "styled-components";
import { Link as LinkS } from 'react-scroll'

export const NavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    transition:  0.32s ease-in-out;
    background: ${({scrolled}) => (scrolled? '#121212' : 'transparent')};
    padding: ${({scrolled}) => (scrolled? '0 3rem' : '3rem 5rem')};
    height: 70px;
    position: fixed;
    z-index: 99999;
    width: 100%;
    top: 0;

    @media screen and (max-width: 720px) {
        padding: ${({scrolled}) => (scrolled? '0 5rem 0 1rem' : '2rem 5rem 0 1rem')};
    }
`
export const NavLogo = styled(LinkS)`
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: bold;
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    /* display: ${({clicked}) => (clicked? '' : 'none')}; */

    @media screen and (max-width: 720px) {
        display: none;
    }
`
export const NavLink = styled(LinkS)`
    list-style-type: none;
    cursor: pointer;
    margin: 0 1rem;
    padding: 0 0.5rem;
    transition: all 0.3s ease-in-out;
    /* color: ${({active}) => (active? '#039be5' : '')};
    height: ${({active}) => (active? '2rem' : '')}; */
    /* border-bottom: ${({active}) => (active? '2px solid #039be5' : '')}; */

    &:hover{
        color: #039be5;
    }

    &.active{
        color: #039be5;
        border-bottom: 2px solid #039be5;
        height: 2rem;
    }

    @media screen and (max-width: 880px) {
        height: 1.5rem;
        padding: 0 10px;
        margin: 0;
        font-size: 12px;
    }
`
export const BtnCv = styled.button`
    padding: 10px;
    outline: none;
    border: 2px solid #039be5;
    background: transparent;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover{
        background: #039be5;
    }

    @media screen and (max-width: 720px) {
        padding: 10px;
        font-size: 12px;
    }
    @media screen and (max-width: 880px) {
        padding: 8px;
        font-size: 14px;
    }
`
export const MenuIcon = styled.div`
    position: absolute;
    z-index: 999;
    right: 0;
    transform: translateX(-15px);
    display: none;

    @media screen and (max-width: 720px) {
        display: block;
    }
`
export const Bars = styled.i`
    padding: 12px;

    @media screen and (max-width: 720px) {
        font-size: 1.8rem;
        padding: 10px;
    }
`

// Fro Mobile Menu
export const MobileMenu = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    padding: 2rem;
    z-index: 9999;
    transition: all 0.3s ease-in-out;
    left: ${({active}) => (active? '0' : '-100%')};
`
export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`
export const MobileLink = styled(LinkS)`
    font-size: 2rem;
    text-align: center;
    padding: 1rem 0;
    margin-top: 10px;
    border-radius: 10px;
    width: 100%;

    &:hover{
        background: #2f2f2f;
    }
    &.active{
        background: #2f2f2f;
    }
`