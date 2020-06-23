import React, { Component } from 'react';
import '../CSS/Main.style.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import { Tooltip } from "@chakra-ui/core";


class MainPage extends Component {
    render() {
        return (
            <div className="Head">
                <a href="/about">
                    <div className="Avatar"></div>
                </a>
                <h1 className="title">Ba Phuong</h1>
                <h2 className="description">Student Of<br></br> Can Tho University</h2>
                <div className="contact">
                    <a href="https:fb.com/p.tran3112" className="link">
                    <Tooltip hasArrow label="fb.com/p.tran3112" placement="bottom" className="tooltip">
                        <FacebookIcon fontSize="large"/>
                    </Tooltip>  
                    </a>
                    <a href="https://github.com/ba-p" className="icon link">
                    <Tooltip hasArrow label="github.com/ba-p" placement="bottom" className="tooltip">
                        <GitHubIcon fontSize="large"/>
                    </Tooltip>
                    </a>
                    <a href="mailto:phuongtr3112@gmail.com" className="link">
                    <Tooltip hasArrow label="phuongtr3112@gmail.com" placement="bottom" className="tooltip">
                        <EmailIcon fontSize="large"/>
                    </Tooltip>
                    </a>
                </div>
                
                    <nav className="nav-home">
                        <ul className="list">
                            <li className="item">
                            <a href="/blog" className="link">Blog</a>
                            </li>
                            <li className="item body-menu">
                            <a href="/about" className="link">About</a>
                            </li>
                        </ul>
                    </nav>
                    
                
            </div>
        );
    }
}

export default MainPage;