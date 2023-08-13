import React,{Fragment} from 'react';
import JuliImage from '../assets/images/sba.jpeg';
import ButtonSectionHeader from './ButtonSectionHeader';
import PresentText from './PresentText';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import ImgThree from './ImgThree' 



const HeaderStyle = styled.div`
    .section{
        height: 100vh;
        min-height: 1000px;
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        position: relative;
        margin-top: 1.5rem;
    }
    .section_social_text{
        ul{
                li{
                    margin-bottom:0.5rem ;
                }
                a{
                    display: inline-block;
                    font-size: 0.7rem;
                    transform: rotate(-90deg);
                    /* letter-spacing: 5px; */
                    letter-spacing: 3px;
                    margin-bottom: 1rem;
                }
            }
    }
    .section__heading{
        font-size: 1rem;
        margin-bottom: -2.5rem;
        position: relative;
        margin-top: 2.2rem;
        
        .section_salu{
            margin-top: 1.5rem;
        }
        span {
            display: inline-block;
            width: 100%;
        }
        .section__name{
            font-size: 3rem;
            margin-bottom: 1rem;
            font-family:'Montserrat SemiBold' ;
            color:var(--white);
        }
    }
    .section__image{
        max-width: 800px;
        width: 100%;
        height: 650px;
        margin: 0 auto;
        border: 2px solid var(--gray-1);
    }
    .section__info{
        margin-top: -8rem;
        
    }
    .section__social,
    .section__scrollDown{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        position: absolute;
        bottom:200px;
        width: 50px;        
    }
    .section__social{
        left: 45px;
        
    }
    .section__scrollDown{
        right: 35px;
        margin-right: 10px;
        
    }
    .section_social_indicator,
    .section__scrollDown{
        width: 50px;
        p{
            font-size: 0.5rem;
            transform: translateY(-60px) rotate(90deg);
            letter-spacing: 5px;
            text-transform: uppercase;   
        }
        img{
            max-height: 120px;
            width: 15px;
            margin: 0 auto;
            object-fit: contain;
            
        }
        .section__srollDown{
            img{
                
                max-height: 90px;
            }
        }

    }
    @media only screen and (max-width:768px){
        .section{
            min-height: 750px;
        }
        .section__heading{
            font-size: 0.5rem;
            margin-bottom: -2rem;

            .section__name{
                font-size: 2rem;
            }
        }
        .section__image{
            height: 300px;
        }
        .section__info{
            margin-top: 1rem;
        }
        .section__social{
            left: 0px;
            bottom: 15%;
            width: 20px;
            .section_social_indicator{
                width: 20px;
                p{
                    font-size: 0.3rem;
                }
                img {
                    max-height: 22px;
                }
            }
        }
        .section_social_text{
            ul{
                li{
                    a{
                        font-size: 0.3rem;
                        margin-bottom: 1rem;
                        letter-spacing: 2px;
                    }
                }
            }
        }
        .section__scrollDown {
            right: 0;
            width: 10px;
            gap:1.3rem;
            p{
                font-size: 0.3rem;
            }
        }
    }
`;
const HeaderSection = () => {
    return (  
        <Fragment>
            <HeaderStyle>
                <div className="section">
                    <div className="container">
                        <h1 className="section__heading">
                            <span className="section_salu"> Hello, I am</span>
                            <span className="section__name"> Julian Barbosa </span>
                        </h1>
                        <div className="section__image">
                            <img src={JuliImage} alt="fotoJulianB"/>

                            {/* <Canvas camera={[0, 0, 0]} shadows>
                              <ImgThree />
                            </Canvas> */}
                        </div>
                        <div className="section__info">
                            <PresentText 
                                msj="Hello everyone out there, I am a person quite curious in what has to do with technology especially with software development and programming."
                            />
                            <ButtonSectionHeader
                                btnLink="/proyects"
                                btnText="See my Works"
                                outline={false}
                            />
                        </div>

                        <div className="section__social">
                            <div className="section_social_indicator">
                                <p>Follow</p>
                                <img src={SocialMediaArrow} alt="Social Media"/>
                            </div>

                            <div className="section_social_text">
                                <ul>
                                    <li>
                                        <a href="https://www.linkedin.com/in/julianbarbossa9/" rel="noreferrer" target="_blank">LI</a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/barbossa9/" target="_blank" rel="noreferrer">IG</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/JulianBarbossa9" target="_blank" rel="noreferrer">GIT</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="section__scrollDown">
                            <p>Scroll</p>
                            <img src={ScrollDownArrow} alt="scroll"/>
                        </div>
                    </div>
                </div>
            </HeaderStyle>
        </Fragment>
    );
}
 
export default HeaderSection;