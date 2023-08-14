import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md'

const NavMenuStyle = styled.div`
    position: fixed;
    z-index: 100;
    top:0;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    background: var(--dark-bg);
    

    ul{
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
        text-align: center;
        

        li {
            display: inline-block; /**Los posicióna horizontalmente*/
            border-radius: 9px;
            transition: 0.3s ease background-color;
            &:hover {
                background-color: var(--deep-dark);
            }
        }

        a{
            display: inline-block;
            font-family:'RobotoMono Regular';
            padding: 1rem 2rem;
            color: var(--gray-1);
            outline: none;

        }
        .active{
            color: var(--white);
        }
    }
    .mobile-menu-icon{
        position: absolute;
        right: 1rem;
        top:1rem; 
        width: 2rem;
        cursor: pointer;
        display: none;
        outline: none;
        *{
            pointer-events: none;
        }
    }
    .closeNavIcon{
        display: none;
       
    }
    @media only screen and (max-width: 768px){
        padding: 0;
        .hideitem {
            transform: translateY(calc(-100% - var(--top)));
        }
        
        .mobile-menu-icon {
            display: block;
            /* width: 1.5rem; */
        }
        .navItems{
            --top:1rem;
            transition: 0.3s ease transform;
            background-color: var(--deep-dark);
            padding: 2rem;
            width: 90%;
            max-width: 300px;
            border-radius: 20px;
            position: absolute;
            right:0.5rem;
            top:var(--top);


            .closeNavIcon {
                display: block;
                width: 1.5rem;
                margin: 0 0 0 auto;
                cursor: pointer;
                *{
                    pointer-events: none;
                }
            }
            li{
                display: block;
                margin-bottom: 0.5rem;
            }
        } 
    }
`;

const NavMenu = () => {

    //State funcional el navMenu
    const [showNav , SetShowNav ] = useState(false);

    return (  
        <NavMenuStyle>
            <div className="mobile-menu-icon"
                onClick={() => SetShowNav(!showNav)}
                role="button"
                onKeyDown={() => SetShowNav(!showNav)}
                tabIndex={0}
            >
            <MdMenu />
            </div>
            <ul className={!showNav ? 'navItems hideitem':'navItems'}>

                <div className="closeNavIcon"
                    onClick={() => SetShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => SetShowNav(!showNav)}
                    tabIndex={0}
                >
                    <MdClose />
                </div>

                <li>
                    <NavLink to="/" 
                        onClick={() => SetShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => SetShowNav(!showNav)}
                        tabIndex={0}
                    > Home 
                    </NavLink>
                    
                </li>

                <li>
                    <NavLink to="/about"
                        onClick={() => SetShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => SetShowNav(!showNav)}
                        tabIndex={0}
                    > 
                        About 
                    </NavLink>
                    
                </li>

                <li>
                    <NavLink to="/projects"
                        onClick={() => SetShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => SetShowNav(!showNav)}
                        tabIndex={0}
                    > 
                        Projects 
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/contact"
                        onClick={() => SetShowNav(!showNav)}
                        role="button"
                        onKeyDown={() => SetShowNav(!showNav)}
                        tabIndex={0}
                    > 
                        Contact 
                    </NavLink>
                </li>
            </ul>
        </NavMenuStyle>
    );
}
 
export default NavMenu;