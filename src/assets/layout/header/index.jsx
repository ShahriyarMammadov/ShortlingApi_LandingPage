import React, { useState } from 'react'
import logo from '../images/Shortly.svg'
import { NavLink } from 'react-router-dom'
import { Card } from 'antd';
import './index.scss'

const HeaderComp = () => {
    const [Toggle, setToggle] = useState(false)

    return (
        <div className='header'>
            <div className="logo">
                <img src={logo} alt="" />
                <div className="navigation">
                    <NavLink to={'/45412'}>Features</NavLink>
                    <NavLink to={'/asdas'}>Pricing</NavLink>
                    <NavLink to={'/sasf'}>Resources</NavLink>
                </div>
            </div>

            {Toggle && (
                <div className="site-card-border-less-wrapper">
                    <Card title={
                        <>
                            Features <br />
                            Pricing <br />
                            Resources
                        </>
                    } bordered={false} style={{ width: 250, backgroundColor: '#3A3054' }}>
                        <p>Login</p>
                        <button>Sign UP</button>
                    </Card>
                </div>
            )}

            <div className="headerRight">
                <div className="menuIcon">
                    <span><i className="fa-solid fa-bars" onClick={() => {
                        setToggle(!Toggle)
                    }}></i></span>
                </div>
                <NavLink to={'/asds'}>Login</NavLink>
                <button><NavLink to={'/sds'}>Sign Up</NavLink></button>
            </div>
        </div>
    )
}

export default HeaderComp