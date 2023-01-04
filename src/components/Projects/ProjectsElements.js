import styled from "styled-components"


export const ProjectsContainer = styled.div`
    height: 600px;
    padding: 1rem 3rem;
    background: #212426;
`
export const MyProjects = styled.div`
    margin-top: 1rem;
    padding: 20px;

    @media screen and (max-width: 880px){
        padding: 0 10px;
    }
`
export const ProjectCard = styled.a`
    position: relative;
    width: 500px;
    height: 250px;
    border-radius: 20px;
    background: #000;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);

    &:hover{
        box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
        transform: scale(1.05, 1.05);       
    }
`
export const ProjectImg = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    border-radius: 20px;
    z-index: 1;
`
export const ProjectInfo = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 16px 20px 20px 20px;
    z-index: 2;
`
export const Category = styled.h6`
    color: #9f9f9f;
`
export const Title = styled.h6`
    color: #fff;
`
export const ProjectCardsContainer = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`
