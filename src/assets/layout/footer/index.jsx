import React from 'react'
import './index.scss'
import left from './images/Path 2 Copy 2.svg'
import right from './images/Path 2 Copy.svg'
import center from './images/Path 2.svg'
import { NavLink } from 'react-router-dom'
import logoImg from './images/Shortly.svg'

const FooterComp = () => {
    return (
        <>
            <div className='footer'>
                <div className="leftImg"></div>
                <div className="centerImg"></div>
                <div className="rightImg"></div>

                <div className="textCenter">
                    <h1>Boost your links today</h1>
                </div>
                <div className="button">
                    <button><NavLink to={'/'}>Get Started</NavLink></button>
                </div>
            </div>
            <div className="footerBottom">
                <div id="logo">
                    <img src={logoImg} alt="" />
                </div>
                <div className="navigationLeft">
                    <p>Features</p>
                    <NavLink to={'/5456dsf'}>Link Shortening</NavLink>
                    <NavLink to={'/5456dsf'}>Branded Links</NavLink>
                    <NavLink to={'/5456dsf'}>Analytics</NavLink>
                </div>
                <div className="navigationCenter">
                    <p>Resources</p>
                    <NavLink to={'/5456dsf'}>Blog</NavLink>
                    <NavLink to={'/5456dsf'}>Developers</NavLink>
                    <NavLink to={'/5456dsf'}>Support</NavLink>
                </div>
                <div className="navigationRight">
                    <p>Company</p>
                    <NavLink to={'/5456dsf'}>About</NavLink>
                    <NavLink to={'/5456dsf'}>Our Team</NavLink>
                    <NavLink to={'/5456dsf'}>Careers</NavLink>
                    <NavLink to={'/5456dsf'}>Contact</NavLink>
                </div>
                <div className="icons">
                    <i className="fa-brands fa-square-facebook"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-pinterest"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </div>
        </>
    )
}

export default FooterComp