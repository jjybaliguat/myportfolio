import React from 'react'
import { Description, H1, HerContainer, HeroContent, HeroImg, ImgContainer, P } from './HeroElements'
import astronaut from '../../assets/img/astronaut.svg'
// import bannerVideo from '../../assets/videos/banner.mp4'

const Hero = () => {
  return (
    <HerContainer id='home'>
      {/* <HeroBg>
        <VideoBg autoPlay loop muted src={bannerVideo} type='video/mp4' />
      </HeroBg> */}
      <HeroContent>
        <Description>
          <H1>Hi!, I'm Justine, a Full-Stack Web Developer</H1>
          <P>A Self-Taught Web Developer. Nothing is very impossible if you really want
            to learn something. #CodingIsLife!
          </P>
        </Description>
        <ImgContainer>
          <HeroImg src={astronaut} alt='Hero img'/>
        </ImgContainer>
      </HeroContent>
    </HerContainer>
  )
}

export default Hero