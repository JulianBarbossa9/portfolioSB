import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyle = styled.div`
    margin-top: 1rem;
    .button{
        font-size: 1rem;
        background-color: ${(props) => 
            (props.outline ? 'trasparent': 'var(--gray-1)')};
        /* padding: 0.5em 1em; */
        padding: 10px 30px;
        border-radius: 10px;
        display: inline-block;
        border: 2px solid var(--gray-1);
        color:${(props) =>  
            (props.outline ? 'var(--gray-1)' : 'black')};
       
        @media only screen and (max-width: 768px){
            .button {
                font-size: 1.8rem;
            }
        }
    }
`;


const ButtonSectionHeader = ({btnLink, btnText, outline}) => {
    return (  
        <>
            <ButtonStyle
                outline={outline}
            >
                <Link 
                    className="button" 
                    to={btnLink}
                > 
                    {btnText}
                </Link>
            </ButtonStyle>
        </>
    );
}
 
export default ButtonSectionHeader;