import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const ProjectItemStyle = styled.div`
    .projectItem__img{
        width: 100%;
        height: 400px;
        overflow: hidden;
        border-radius: 12px;
        display: inline-block;
        border: 3px solid var(--gray-2);
        background-color: #222;
        position: relative;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }
    }
    .projectItem__info{
        margin-top: 0.5rem;
        background-color: var(--deep-dark);
        padding: 0.5rem;
        border-radius:12px;
        width: 100%;
        box-sizing: border-box;
    }
    .projectItem__title{
        font-size: 1rem;
        color: #fff;
    }
    .projectItem__descrip{
        font-size: 0.9rem;
        font-family: 'RobotoMono Regular';
        margin-top: 0.5rem;
        color: #fff;
    }
    .projectButton{
        display:inline-block;
        font-size: 0.9rem;
        text-decoration: underline;
        color: royalblue;
    }
    @media only screen and (max-width: 768px){
        .projectItem__img{
            height: 305px;
        }
        .projectItem__descrip{
            font-size: 0.8rem;
        }
        .projectItem__info {
            width: 100%;
        }
        
    }

`;

const ProjectItem = ({img, title, descrip, link}) => {
    return (  
        <>
            <ProjectItemStyle>
            <Link to="" className="projectItem__img">
                <img src={img} alt="project img"/>
            </Link>
            <div className="projectItem__info">
                <Link to="/#">
                    <h3 className="projectItem__title">
                        {title}
                    </h3>
                </Link>
                <p className="projectItem__descrip">
                    {descrip}
                </p>

                {link && <a className='projectButton' target="_blank" rel="noreferrer"  href={link}>Open Project</a>}
            </div>
            </ProjectItemStyle>
        </>
    );
}
 
export default ProjectItem;