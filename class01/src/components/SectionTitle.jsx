import React,{Fragment} from 'react';
import styled from 'styled-components';


const SectionTitleStyle = styled.div`
    
    p {
        font-family: 'RobotoMono Regular';
        font-size: 1rem;
    }
    h2{
        font-family: 'Montserrat Bold';
        font-size: 2rem;
        margin-top: 0.5rem;
        margin-bottom: 1.5rem;
        text-transform: uppercase;
    }
    @media only screen and (max-width:768px){
        p{
            font-size: 1rem;
            /* margin-top: 3.5rem; */
        }
        h2{
            font-size: 1.5rem;
        }
    }
`;
const SectionTitle = ({subHeading, title}) => {
    return (  
        <Fragment>
            <SectionTitleStyle className="sectionTitleee">
                <p>{subHeading}</p>
                <h2>{title}</h2>
            </SectionTitleStyle >
        </Fragment>
    );
}
 
export default SectionTitle;