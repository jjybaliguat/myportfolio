import styled from "styled-components"
import banner from '../../assets/img/banner2.jpg'

export const HerContainer = styled.div`
    height: 700px;
    padding: 180px 0 100px 0;
    background-image: url(${banner});
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;

    @media screen and (max-width: 880px){
        padding: 125px 0 100px 0;
        /* height: 100vh; */
    }
    
`
export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`
export const HeroContent = styled.div`
    display: flex;
    align-items: center;
    padding: 0 5rem;
    justify-content: space-between;

    @media screen and (max-width: 880px){
        flex-direction: column-reverse;
        gap: 2rem;
        padding: 0 1rem;
    }
`
export const ImgContainer = styled.div`
    /* position: absolute;
    right: 0;
    padding: 0 7rem; */
`
export const HeroImg = styled.img`
    height: 300px;
    animation: updown 5s linear infinite;

    @keyframes updown {
    0% {
        transform: translateY(-20px);
    }
    50% {
        transform: translateY(20px);
    }
    100% {
        transform: translateY(-20px);
    }
}

    @media screen and (max-width: 880px){
        height: 200px;
    }
`
export const Description = styled.div`
    display: block;
`
export const H1 = styled.h1`
    font-size: 3rem;

    @media screen and (max-width: 880px){
        font-size: 2rem;
        text-align: center;
    }
`
export const P = styled.p`
    font-size: 1.5rem;
    color: #9f9f9f;

    @media screen and (max-width: 880px){
        font-size: 1rem;
        text-align: center;
    }
`