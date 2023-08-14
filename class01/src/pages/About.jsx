import React, { Fragment} from 'react';
import Footer from '../components/Footer';
import PresentText from '../components/PresentText';
import AboutInfoItem from '../components/AboutInfoItem';
import ButtonSectionHeader from '../components/ButtonSectionHeader';
import AboutImage from '../assets/images/img2.png';
import styled from 'styled-components';
import ContactBanner from '../components/ContactBanner';
import { Canvas } from '@react-three/fiber';
import { Center, AccumulativeShadows, RandomizedLight, OrbitControls, Environment } from '@react-three/drei';
import GelatineCube from '../components/GelatineCube';


const AboutSectionStyle = styled.div`
     padding: 10rem 0 0rem 0;
     .top-section{
         display:flex;
         align-items:center;
         justify-content:center;
         gap:2rem;
     }

     .left{
         flex: 3;
     }
     .right{
         flex: 2;
         height: 600px;
         width: 600px
     }
     .about__subheading{
         margin-bottom: 2rem;
        font-size: 1rem;
        span{
            background-color: var(--deep-dark);
            padding: 0.5rem;
            border-radius: 9px;
        }
     }
     .about__heading{
         margin-bottom: 1.5rem;
     }
     .about__info{
         margin-bottom: 2rem;   
         .para{
             max-width:100%;
         }
     }
     .right {
         img{
             border: 2px solid var(--gray-1);
         }
     }

     .about__info_items{
         margin-top: 10rem;
     }
     .about__info__item{
         margin-bottom: 9rem;
     }
     .about__info__heading{
         font-size: 1.5rem;
         text-transform: uppercase;
     }
     @media only screen and (max-width: 768px){
         padding:10rem 0;
         .top-section{
             flex-direction: column;
             gap:3rem; 
         }
         .about__subheading{
             font-size: 1rem;
         }
         .about__heading{
             font-size: 2rem;
         }
         .about__info_heading{
             font-size: 1rem;
         }
     }
`;



const About = () => {
    return (  
        <Fragment>
            <AboutSectionStyle>
                <div className='container'>
                    <div className='top-section'>
                        <div className='left'>
                            <p className='about__subheading'>
                                Hi, I am <span>Julian Barbosa</span>
                            </p>
                            <h2 className='about__heading'>Multimedia Engineer</h2>
                            <div className='about__info'>
                                <PresentText 
                                    msj="I am from Bogotá Colombia at the university I studied Multimedia Engineer with excellent teamwork skills, good communication, responsible and very punctual with leadership skills and a high sense of belonging.

                                    Extensive knowledge in Front-End development and Scrum methodology in addition to good programming skills, also eager to continue learning and growing in the world of software development. "
                                />
                            </div>

                            <ButtonSectionHeader 
                                btnLink = "/about"
                                btnText = "Dowload CV"

                            />
                        </div>
                        <div className='right'>
                            {/* <img src={AboutImage } alt="sb ima"/> */}
                            {/* <Canvas shadows camera={{position: [8,20,50], fov: 10}}>
                              <ambientLight />
                              <group>
                                <Center top>
                                  <GelatineCube />
                                </Center>
                                <AccumulativeShadows temporal frames={100} alphaTest={0.9} color="#3ead5d" colorBlend={1} opacity={0.8} scale={20}>
                                  <RandomizedLight radius={10} ambient={0.5} intensity={1} position={[2.5, 8, -2.5]} bias={0.001} />
                                </AccumulativeShadows>
                              </group>
                              <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} autoRotate autoRotateSpeed={0.05} makeDefault />
                              <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/dancing_hall_1k.hdr" background blur={1} />
                            </Canvas> */}
                        </div>
                    </div>

                    <div className='about__info_items'>
                        <div className='about__info__item'>
                            <h2 className='about__info__heading'>Education </h2>
                            <AboutInfoItem 
                                title="School"
                                items={["Instituto Tecnico Industrial Centro Don Bosco"]}
                            />

                            <AboutInfoItem 
                                title="College"
                                items={["Universidad Militar Nueva Granada"]}
                            />
                        </div>

                        <div className='about__info__item'>
                            <h2 className='about__info__heading'>Experience</h2>
                            <AboutInfoItem 
                                title="Software Engineer "
                                items={["Akorbi: Software Engineer, I have worked in the development of a scheduling platform, focusing mainly as a front-end developer using React."]}
                            />
                            <AboutInfoItem 
                                title="Software Developer "
                                items={["TicSocial: I created with the team solutions for healthcare companies and EPS in Colombia, focusing on the creation of a patient management platform with React JS for the front-end and Django for the back-end."]}
                            />
                            <AboutInfoItem 
                                title="Internships "
                                items={["Accenture: Aplication Development Sofware"]}
                            />

                           
                        </div>
                        
                        <div className='about__info__item'>
                            <h2 className='about__info__heading'>My Skill </h2>
                            <AboutInfoItem 
                                title="BackEnd"
                                items={["NodeJS","SQL", "GraphQL", "Django", "Python", "Bash-Scripting", "PostgreSQL"]}
                            />

                            <AboutInfoItem 
                                title="FrontEnd"
                                items={["TypeScript","JavaScript","React JS", "Redux","Next JS", "Three JS"]}
                            />
                            
                            <AboutInfoItem 
                                title="Other"
                                items={["AWS","Azure", "Data Migration","Git","Machine Learning","POO","SCRUM"]}
                            />
                        </div>
                    </div>
                </div>
            </AboutSectionStyle>
            <ContactBanner />
            <Footer />
        </Fragment>
    );
}
 
export default About;