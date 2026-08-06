import React, { Fragment } from 'react';
import styled from 'styled-components';


const AboutItemStyle = styled.div`
    margin-bottom: 2.5rem;

    .title{
        font-size: 1.1rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: var(--white);
        margin-bottom: 1rem;
        padding-left: 0.75rem;
        border-left: 3px solid var(--gray-1);
    }
    .items {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
    }
    .item{
        background-color: var(--deep-dark);
        padding: 0.5rem 1rem;
        border-radius: 9px;
        border: 1px solid transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.85rem;
        line-height: 1.3;
        transition: 0.2s ease border-color, 0.2s ease transform;

        &:hover{
            border-color: var(--gray-1);
            transform: translateY(-2px);
        }
    }

    @media only screen and (max-width: 768px){
        margin-bottom: 2rem;
        .title{
            font-size: 1rem;
        }
        .items{
            gap: 0.6rem;
        }
    }
`;

const AboutInfoItem = ({title, items}) => {


    return (
        <Fragment>
            <AboutItemStyle>
                <h3 className='title'>{title}</h3>
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