import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const ColStyle = styled.div`
    .heading{
        font-size: 0.7rem;
        margin-top: 1rem;
        /* margin-bottom: 1rem; */
    }
    li{
        margin-bottom: 3px;
        text-align: left;
    }
    a {
        font-size: 0.5rem;
    }
`;

const FooterCol = ({heading, links = [
    {
        type: 'Links',
        title: 'Home',
        path: '/home'
    },
    {
        type: 'Links',
        title: 'About',
        path: '/about'
    },
    
]}) => {
    return (  

        <Fragment>
            <ColStyle>
                <h4 className='heading'>{heading}</h4>
                <ul>
                    {
                        links.map((item,index) => (
                            <li key={index}>
                                {item.type === 'Link' ? (
                                    <Link to={item.path}>{item.title}</Link>
                                ): (
                                    <a href={item.path} target="_blank" rel="noreferrer">{item.title}</a>
                                )}
                            </li>
                        ))
                    }
                </ul>
            </ColStyle>
        </Fragment>
    );
}
 
export default FooterCol;