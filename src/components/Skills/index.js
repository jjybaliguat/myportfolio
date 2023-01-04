import React from 'react'
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from "react-visibility-sensor";
import { Description } from '../Hero/HeroElements'
import { SkillsData } from './SkillsData';
import { SkillsContainer, SkillsContent, H1, P, SkillsCard} from './SkillsElements'

const Skills = () => {
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
    <SkillsContainer id='skills'>
      <SkillsContent>
        <Description>
          <H1>Skills</H1>
          <P fade={true}>Languages & Frameworks that I speak</P>
        </Description>
        <Carousel 
          responsive={responsive} 
          infinite={true}
        >
          {SkillsData.map((item, id) => {
            return (
            <SkillsCard key={id}>
              <div style={{ width: 200, height: 200 }}>
                <VisibilitySensor>
                  {({ isVisible }) => {
                    const percentage = isVisible ? item.percent : 0
                    return (
                      <CircularProgressbarWithChildren value={percentage}
                        styles={{
                          trail: {
                            // Trail color
                            stroke: 'inherit',
                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                            strokeLinecap: 'round',
                          },
                          text: {
                            fill: '#fff',
                            // Text size
                            fontSize: '16px',
                          }
                        }
                        }>
                          <img style={{ width: item.width, marginTop: -5 }} src={item.img} alt={`${item.name}`} />
                          <div style={{ fontSize: 30, marginTop: -5 }}>
                            {`${item.percent}%`}
                          </div>
                        </CircularProgressbarWithChildren>
                    )
                  }}
                </VisibilitySensor>
              </div>
              <P>{item.name}</P>
            </SkillsCard>
            )
          })}
        </Carousel>
      </SkillsContent>
    </SkillsContainer>
  )
}

export default Skills