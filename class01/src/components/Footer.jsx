import React, { Fragment } from 'react';
import PresentText from './PresentText';
import FooterCol from './FooterCol';
import styled from 'styled-components';


const FooterStyle = styled.div`
    /* margin-top: 10rem; */
    background-color: var(--deep-dark);
    .container{
        display: flex;
        gap:1.5rem;
        /* border: 2px solid red;  */
    }

    .footer__col1{
        flex:2;
    }
    .footer__col2,
    .footer__col3,
    .footer__col4{
        flex: 1;
    }
    .footer__col1__title{
        font-size: 1rem;
        margin: 1rem 0rem;
    }
    .para{
        font-size:0.6rem;
    }
    
    .copyRight{
        background-color: var(--dark-bg);
        text-align: left;
        /* margin-right: 500px; */
        padding: 0.5rem 0;
        margin-top: 2rem;
        .para{
            margin-left: 0;
        }
    }
    @media only screen and (max-width:768px){
        .container{
            flex-direction: column;
            gap:0rem;
            & > div{
                margin-top: 1rem;
            }
        }
        .footer__col1 .para{
            max-width: 100%;
        }
        .copyRight{
            .container{
                div{
                    margin-top: 0;
                }
            }
        }
    }
`;

const Footer = () => {

    let date = new Date().getFullYear()
    return (  
        <Fragment>
            <FooterStyle>
                <div className='container'>
                    <div className='footer__col1'>
                        <h3 className='footer__col1__title'>Julian Barbosa</h3>
                        <PresentText 
                            msj="Multimedia Engineer with a good knowledge in Object Oriented Programming and web development as well as knowledge in software development."
                        />
                    </div>

                    <div className='footer__col2'>
                        <FooterCol 
                            heading="Important Links"
                            links={
                                [
                                    {
                                        title:"Home",
                                        path:"/",
                                        type:"Link"
                                    },
                                    {
                                        title:"About",
                                        path:"/about",
                                        type:"Link"
                                    },
                                    {
                                        title:"Projects",
                                        path:"/proyects",
                                        type:"Link"
                                    },
                                    {
                                        title:"Contact",
                                        path:"/contact",
                                        type:"Link"
                                    }
                                ]
                            }
                        />
                    </div>

                    <div className='footer__col3'>
                        <FooterCol 
                            heading="Contact Info"
                            links={
                                [
                                    {
                                        title:"+57 316 828 6189",
                                        path:'https://api.whatsapp.com/send?phone=573168286186'
                                    },
                                    {
                                        title:'julianbarbossa@hotmail.com',
                                        path:'mailto:julianbarbossa@hotamil.com'
                                    },
                                    {
                                        title:'Bogotá, Colombia',
                                        path:"https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=es&msa=0&ll=4.647304999999996%2C-74.09630300000002&spn=10.933602%2C10.986328&z=5&source=embed&mid=1avLq2SjfBITa2qNQ2pdB-0rjldI"
                                    }
                                
                                ]
                            }
                        />
                    </div>

                    <div className='footer__col4'>
                        <FooterCol 
                            heading="Social Media"
                            links={
                                [
                                    {
                                        title:"Instagram",
                                        path:'https://www.instagram.com/barbossa9/'
                                    },
                                    {
                                        title:"Twitter",
                                        path:'https://twitter.com/JulianBarbossa9'
                                    },
                                    {
                                        title:"GitHub",
                                        path:'https://github.com/JulianBarbossa9'
                                    },
                                    {
                                        title:"Linkedin",
                                        path:'https://www.linkedin.com/in/julianbarbossa9'
                                    }
                                ]
                            }
                        />
                    </div>
                </div>

                <div className="copyRight">
                    <div className='container'>
                         <PresentText 
                            msj={`© ${date} - Julian Barbosa | Multimedia Engineer | Software Engineer`}
                         />       
                    </div>
                </div>
            </FooterStyle>
        </Fragment>
    );
}
 
export default Footer;