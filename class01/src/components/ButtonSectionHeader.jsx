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


const ButtonSectionHeader = ({btnLink, btnText, outline, download}) => {
    
    const handleDownLoadCV = () => {
        const pdfUrl = '/public/Julian Santiago Barbosa Alvarado CV23023 En.pdf'
        // const pdfUrl = process.env.REACT_APP_PDF_URL
        // D:/Documentos/ProyectoSB19/ReactJS/threeReact/class01/public/Julian Santiago Barbosa Alvarado CV23023 En.pdf
        const fileName = 'JulianBarbosaCV.pdf'

        const link = document.createElement('a')
        link.href = pdfUrl
        link.download = fileName

        link.click()
    }
    
    return (  
        <>
            {download ? (
                <ButtonStyle 
                    outline={outline}
                >
                    <Link 
                        className='button'
                        onClick={handleDownLoadCV}
                    >
                        {btnText}
                    </Link>
                </ButtonStyle>
            ) : (
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
            )}
            
        </>
    );
}
 
export default ButtonSectionHeader;