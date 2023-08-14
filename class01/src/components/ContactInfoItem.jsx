import React, { Fragment } from 'react';
// import { MdPlace } from 'react-icons/md';
import PresentText from './PresentText';
import styled from 'styled-components';


const ContactItemStyled = styled.div`
    padding: 1rem;
    background-color: var(--deep-dark);
    display: flex;
    align-items: center;
    gap: 1.5rem;
    border-radius: 9px;
    margin-bottom: 1rem;
    .icon{
        color: var(--white);
        background-color: var(--gray-2);
        padding: 1rem;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
    .svg {
        width: 3rem;
        
        
    }

`;

const ContactInfoItem = ({icon, text }) => {
    return (  
        <Fragment>
            <ContactItemStyled >
                <div className="icon">
                    {icon}
                </div>

                <div className="info">
                    <PresentText 
                        msj={text}
                    />
                </div>
            </ContactItemStyled >
        </Fragment>
    );
}
 
export default ContactInfoItem;