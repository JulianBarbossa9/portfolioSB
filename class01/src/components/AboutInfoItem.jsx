import React, { Fragment } from 'react';
import styled from 'styled-components';


const AboutItemStyle = styled.div`
    display:flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 2rem;
    margin-bottom: 5rem;
    position: relative;
    .title{
        font-size:2rem;
    }
    .items {
        display:flex;
        gap: 1.5rem;
        position: absolute;
        left: 12rem;
        /* margin-left: 1.5rem; */
    }
    .item{
        background-color: var(--deep-dark);
        padding: 0.5rem;
        border-radius: 9px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

  
    @media only screen and (max-width: 768px){
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        .items{
            position: initial;
            gap: 1rem;
            /* left: 2rem; */
        }
        .title{
            font-size: 1.5rem;
        }
    }

    
    
`;

const AboutInfoItem = ({title, items}) => {
    
    
    return (  
        <Fragment>
            <AboutItemStyle>
                <h3 onClick="title">
                    {title}
                </h3>
                <div className='items'>
                    {items.map((item, index) => (
                        <div className='item' key={index}>
                            <p className='select__item'>{item}</p>
                        </div>
                    ))}
                </div>
            </AboutItemStyle>
        </Fragment>
    );
}
 
export default AboutInfoItem;