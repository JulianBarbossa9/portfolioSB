import React, { Fragment } from 'react';
import SectionTitle from './SectionTitle';
import ContactInfoItem from './ContactInfoItem';
import ContactForm from './ContactForm';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone, MdPlace } from 'react-icons/md';


const ContactSectionStyle= styled.div`
    padding: 10rem 0;
    .sectionTitleee{
        text-align: center;
    }
    .contactSection__wrappper{
        display: flex;
        gap: 4rem;
        margin-top: 3rem;
        justify-content: space-between;
        position: relative;
    }
    .contactSection__wrappper::after{
        position: absolute;
        content: '';
        width: 2px;
        height: 70%;
        background-color: var(--gray-1);
        left: 50%;
        top:30%;
        transform: translate(-50%, -50%);
    }
    .left{
        width: 100%;
        max-width: 500px;
    }
    .right {
        max-width: 500px;
        width: 100%;
    }
    @media only screen and (max-width: 768px){
        .contactSection__wrappper{
            flex-direction: column;
        }
        .contactSection__wrappper::after{
            display: none;
        }
        .left,
        .right{
            max-width: 100%;
        }
        .right{
            padding: 2rem 2rem 2rem 2rem;
        }
    }
`;

const ContactSection = () => {
    return (  
        <Fragment>
            <ContactSectionStyle>
                <div className="container">
                    <SectionTitle 
                        subHeading="Get in touch"
                        title="Contact"
                    />
                    <div className="contactSection__wrappper">
                        <div className="left">
                            <ContactInfoItem
                                icon={<MdLocalPhone />} 
                                text="+57 316 828 6189"
                            />
                            <ContactInfoItem
                                icon={<MdEmail/>}
                                text="julianbarbossa@hotmail.com"
                            />
                            <ContactInfoItem
                                icon={<MdPlace />} 
                                text="Bogotá, Colombia"
                            />
                        </div>
                        <div className="right">
                           <ContactForm />
                        </div>
                    </div>
                </div>
            </ContactSectionStyle>
        </Fragment>
    );
}
 
export default ContactSection;