import React from 'react';
import styled from 'styled-components';

const ExpItemStyle = styled.div`
    display: flex;
    gap: 2rem;
    margin-bottom: 3rem;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: 20px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: var(--gray-1);
    }

    &:last-child::before {
        display: none;
    }

    .dot {
        width: 12px;
        height: 12px;
        background: var(--deep-dark);
        border: 2px solid var(--gray-1);
        border-radius: 50%;
        position: absolute;
        left: 15px;
        top: 5px;
        z-index: 1;
    }

    .content {
        margin-left: 40px;
        flex: 1;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        flex-wrap: wrap;
        margin-bottom: 0.5rem;
    }

    .role {
        font-size: 1.2rem;
        font-weight: bold;
        color: #fff;
        background-color: var(--deep-dark);
        padding: 0.4rem 0.8rem;
        border-radius: 9px;
        display: inline-block;
        margin: 0;
    }

    .company {
        font-size: 1.1rem;
        color: #fff;
        background-color: var(--deep-dark);
        padding: 0.4rem 0.8rem;
        border-radius: 9px;
        font-weight: 600;
        display: inline-block;
        margin: 0;
    }

    .meta {
        font-size: 0.9rem;
        color: #fff;
        background-color: var(--deep-dark);
        padding: 0.2rem 0.6rem;
        border-radius: 9px;
        font-style: italic;
        margin-bottom: 1rem;
        display: inline-block;
        opacity: 0.8;
    }

    .description-pill {
        background-color: var(--deep-dark);
        color: #fff;
        padding: 0.6rem 1rem;
        border-radius: 9px;
        font-size: 1rem;
        margin-bottom: 1rem;
        display: inline-block;
        line-height: 1.4;
    }

    .achievements {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .achievement-pill {
        background-color: var(--deep-dark);
        color: #fff;
        padding: 0.4rem 0.8rem;
        border-radius: 9px;
        font-size: 0.85rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border: 1px solid var(--gray-1);
    }

    .achievement-pill::before {
        content: '▹';
        color: var(--gray-1);
        font-weight: bold;
    }

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
        
        .header {
            flex-direction: column;
            gap: 0.2rem;
        }
    }
`;

const ExperienceItem = ({ exp }) => {
    return (
        <ExpItemStyle>
            <div className="dot" />
            <div className="content">
                <div className="header">
                    <h3 className="role">{exp.role}</h3>
                    <h4 className="company">{exp.company}</h4>
                </div>
                <div className="meta">{exp.period} | {exp.location}</div>
                <div className="description-pill">{exp.description}</div>
                {exp.achievements && (
                    <ul className="achievements">
                        {exp.achievements.map((achievement, index) => (
                            <li key={index} className="achievement-pill">
                                {achievement}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </ExpItemStyle>
    );
};

export default ExperienceItem;
