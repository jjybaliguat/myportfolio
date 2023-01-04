import styled from "styled-components"

export const SkillsContainer = styled.div`
    height: 600px;
    padding: 1rem 3rem;
    background: #000;

    @media screen and (max-width: 880px){
        padding: 1rem 2rem;
    }
`
export const SkillsContent = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 3rem;
`
export const H1 = styled.h1`
    font-size: 3rem;
    text-align: center;

    @media screen and (max-width: 880px){
        font-size: 2rem;
    }
`
export const P = styled.p`
    font-size: 2rem;
    color: ${({fade}) => (fade? '#9f9f9f': '')};
    text-align: center;
    margin-top: 1rem;

    @media screen and (max-width: 880px){
        font-size: 1.5rem;
    }
`
export const SkillsCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`