import React from 'react'
import { H1 } from '../Hero/HeroElements'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Category, MyProjects, ProjectCard, ProjectCardsContainer, ProjectImg, ProjectInfo, 
  ProjectsContainer, Title } from './ProjectsElements'
import { ProjectsData } from './ProjectsData'

const Projects = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }
  return (
    <ProjectsContainer id='myprojects'>
        <H1>My Sample Projects</H1>
        <MyProjects>
          <Carousel responsive={responsive} infinite={true} showDots={true}>
              {ProjectsData.map((item, id) => {
              return (
                <ProjectCardsContainer key={id}>
                  <ProjectCard href={item.link} target='_blank'>
                    <ProjectImg src={item.img} />
                    <ProjectInfo>
                      <Category>{item.category}</Category>
                      <Title>{item.title}</Title>
                    </ProjectInfo>
                  </ProjectCard>
                </ProjectCardsContainer>
              )
            })}
          </Carousel>
        </MyProjects>
    </ProjectsContainer>
  )
}

export default Projects