import React,{ Fragment } from 'react';
import SectionTitle from './SectionTitle';
import ServiceComponent from './ServiceComponent';
import styled from 'styled-components';
import { MdCode, MdSignalCellularAlt } from 'react-icons/md';
import { FiDatabase } from 'react-icons/fi'

const ServiceSectionStyle = styled.div`
    padding: 10rem 0;
    .sectionTitle{
        text-align:  center;
        
    }
    .services__allItems{
        display: flex;
        gap:4rem;
        justify-content: space-between;
        margin-top: 2rem;
        /* border: 2px solid red;  */
    }
    .sectionTitleee{
        text-align: center;
    }
    @media only screen and (max-width:768px){
        .services__allItems{
            flex-direction: column;
            max-width: 350px;
            margin: 0 auto;
            margin-top: 3rem; 
            gap: 4;
        }
    }

`;

const ServiceSection = () => {
    return (  
        <Fragment>
            <div className="container">
                <ServiceSectionStyle>
                    <SectionTitle 
                        subHeading="What I will for you"
                        title="services"
                        className="sectionTitle"
                    />

                    <div className="services__allItems">
                        <ServiceComponent 
                            icon={<MdSignalCellularAlt /> }
                            title="Data Science"
                            description="I have done a few projects in this area in which mathematical calculations or a set of data is used to derive meaning."
                        />
                        <ServiceComponent 
                            icon={<MdCode />}
                            title="Development Software"
                            description="Throughout my career I have developed IT activities dedicated to the process of creation, design, deployment and support of software."
                        />
                        <ServiceComponent 
                            icon={<FiDatabase />}
                            title="Data Bases"
                            description="I have studied, traditional databases and cloud services, the latter is the one I like the most because of the multiple services it offers."
                        />
                    </div>
                </ServiceSectionStyle>
            </div>
        </Fragment>
    );
}
 
export default ServiceSection;