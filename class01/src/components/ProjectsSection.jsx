import React, {Fragment} from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';

import SectionTitle from './SectionTitle';
import ProjectItem from './ProjectItem';
import projects from '../assets/data/projects';
import styled from 'styled-components';

// SwiperCore.use([Navigation]);


const ProjectSectionStyle = styled.div`
    padding: 10rem 0;
    .sectionTitleee{
        text-align: center;
    }
    .projects__allItems{
        display: flex;
        gap:1rem;
        margin-top: 1rem;
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
        /* transform: translateY(50%); */
        color:var(--gray-1);
        border-radius: 9px;
    }
    .swiper-button-next{
        right: 0;
        /* border: 2px solid red;  */
    }
    .swiper-button-prev::after,
    .swiper-button-next::after{
        font-size: 1rem;
    }
    @media only screen and (max-width: 768px){
        .projects__allItems{
            flex-direction: column;
            max-width: 400px;
            margin: 0 auto;
            margin-top: 5rem;
            gap: 3rem;
            .projectItem__img{
                width: 100%;
            }
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
                            spaceBetween={30}
                            slidesPerView={3}
                            navigation
                            breakpoints={
                                {
                                    // cuando la ventana tenga un widht  >= 640px muestra 1 tarjetas
                                    640: {
                                        slidesPerView: 1,
                                    },
                                    // cuando la ventana tenga un widht  >= 768px muestra 2 tarjetas
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    // cuando la ventana tenga un widht  >= 1200px muestra 3 tarjetas
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
                                            key={project.id}
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