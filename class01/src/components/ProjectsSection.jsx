import React, {Fragment} from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/navigation';

import SectionTitle from './SectionTitle';
import ProjectItem from './ProjectItem';
import projects from '../assets/data/projects';
import styled from 'styled-components';


const ProjectSectionStyle = styled.div`
    padding: 10rem 0;
    .sectionTitleee{
        text-align: center;
    }
    .projects__allItems{
        margin-top: 1rem;
        width: 100%;
        overflow: hidden;
    }
    .swiper-container{
        padding-top:3rem;
        max-width: 100%;
    }
    .swiper-button-prev,
    .swiper-button-next{
        position: absolute;
        height: 50px;
        width: 50px;
        background-color: var(--deep-dark);
        z-index: 10;
        right: 60px;
        left: auto;
        top:0;
        margin-top: 20px; 
        color:var(--gray-1);
        border-radius: 9px;
    }
    .swiper-button-next{
        right: 0;
    }
    .swiper-button-prev::after,
    .swiper-button-next::after{
        font-size: 1rem;
    }
    @media only screen and (max-width: 768px){
        overflow-x: hidden;
        .projects__allItems{
            margin-top: 5rem;
        }
    }
`;

const ProjectsSection = () => {
    return (  
        <Fragment>
            <ProjectSectionStyle>
                <div className="container">
                    <SectionTitle 
                        subHeading="Some of my recent works"
                        title="Projects"
                        className="sectionTitle"
                        
                    />
                    <div className="projects__allItems">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            breakpoints={
                                {
                                    640: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                    }
                                }
                            }
                        >
                            {projects.map((project, index) => {
                                if(index >= 5){
                                    return null; 
                                } 
                                return(
                                    <SwiperSlide key={project.id}>
                                        <ProjectItem 
                                            img={project.img}
                                            title={project.name}
                                            descrip={project.desc}
                                            link={project.link}
                                        />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </ProjectSectionStyle>
        </Fragment>
    );
}

export default ProjectsSection;
