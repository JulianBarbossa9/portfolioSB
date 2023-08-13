import React, { Fragment } from 'react';
import PresentText from './PresentText';
import styled from 'styled-components';


const ItemStyled = styled.div`
    text-align: center;
    .servicesItem__icon{
    
        svg{
            width: 2.5rem;
        }
    }
    .sevicesItem__title{
        font-size: 1.5rem;
        font-family: 'Montserrat SemiBold';
    }
    .para{
        margin-top: 1.5rem;
    }
`;

const ServiceComponent = ({icon, title, description}) => {
    return (   
       <Fragment>
            <ItemStyled>
                <div className="servicesItem__icon">
                    {/* <MdDesktopMac /> */}
                    {icon}
                    <div className="sevicesItem__title">
                        {title}
                    </div>
                    <PresentText 
                        msj={description}
                    />
                    
                </div>
            </ItemStyled>
       </Fragment>
    );
}
 
export default ServiceComponent;