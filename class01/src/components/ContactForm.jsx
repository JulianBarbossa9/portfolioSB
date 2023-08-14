import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

const ContactFormStyled = styled.form`
    width: 100%;
    .form-group{
        width: 100%;
        margin-bottom: 1rem;
    }
    label{
        font-size: 1rem;
    }
    input,
    textarea{
        width: 100%;
        font-size:1rem ;
        padding: 0.5rem;
        color: var(--gray-1);
        background-color: var(--deep-dark);
        outline: none;
        border:none;
        border-radius: 9px;
        margin-top: 0.5rem;
    }
    textarea{
        min-height: 250px;
        resize: vertical;
    }
    button[type="submit"]{
        background-color: var(--gray-1);
        color: var(--black);
        font-size: 1.5rem;
        display: inline-block;
        outline: none;
        border:none;
        padding: 1rem 3.5rem;
        border-radius: 9px;
        cursor: pointer;
    }
`;

const ContactForm = () => {

    const [ name , saveName ] = useState('');
    const [ email , saveEmail ] = useState('');
    const [ message , saveMessage ] = useState('');

    return (  
        <Fragment>
            <div>
                <ContactFormStyled >
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={name}
                            onChange= {e => saveName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Your Email</label>
                        <input 
                            type="text" 
                            id="email" 
                            name="email" 
                            value={email}
                            onChange= {e => saveEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your message</label>
                        <textarea 
                            type="text" 
                            id="message" 
                            name="message" 
                            value={message}
                            onChange= {e => saveMessage(e.target.value)}
                        />
                    </div>
                    <button type="submit"> Send </button>
                </ContactFormStyled >
            </div>
        </Fragment>
    );
}
 
export default ContactForm;