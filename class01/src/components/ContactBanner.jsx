import React, { Fragment } from 'react';
import PresentText from './PresentText';
import ButtonSectionHeader from './ButtonSectionHeader';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import CanvasSection from './CanvasSection';


const ContactBannerStyled = styled.div`
    padding: 10rem 0;
    
    .contactBanner__wraper{
      background-color: var(--deep-dark);
      border: 2px solid red;
        border-radius:12px;
        padding: 4rem;
        text-align: center;
    }
    .contactBanner__heading{
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }
    @media only screen and (max-width: 768px){
        .contactBanner__heading{
            font-size: 1.5rem;
        }
    }
        
`;

const ContactBanner = () => {
    return (  
        <Fragment>
            <ContactBannerStyled>
                <div className='container'>
                    {/* <div className='contactBanner__wraper'>
                        <PresentText 
                            msj="Have a project in mind"
                        />
                        <h3 className='contactBanner__heading'>
                            Let me help you
                        </h3>
                        <ButtonSectionHeader 
                            btnLink= "/contact"
                            btnText= "Contact Now"
                        />
                    </div> */}
                    <div className='contactBanner__wraper'>
                      <CanvasSection />
                    </div>
                </div>
            </ContactBannerStyled>
        </Fragment>
    );
}
 
export default ContactBanner;