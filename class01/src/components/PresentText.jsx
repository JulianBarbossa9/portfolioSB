import React,{Fragment} from 'react';
import styled from 'styled-components';

const PresentStyle = styled.div`
    max-width: 700px;
    margin: 0 auto;
    font-size: 0.8rem;
    line-height: 1.3em;
    @media only screen and (max-width: 768px){
        font-size: 1rem;
    }
`;
const PresentText = ({msj}) => {
    return (  
        <>
            <PresentStyle className="para">
                <p>{msj}</p>
            </PresentStyle>
        </>
    );
}
 
export default PresentText;