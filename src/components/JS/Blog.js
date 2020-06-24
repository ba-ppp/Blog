import React from 'react';
import '../CSS/Blog.style.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import { Tooltip } from "@chakra-ui/core";
import { Link } from 'react-router-dom';

export default function blog(){
    return(
        <div>
            <nav className="nav">
                <ul className="list">
                    <li className="item">
                        <a class="linknav" href="/">Home</a>
                    </li>
                    <li className="item">
                        <a class="linknav" href="/about">About</a>
                    </li>
                </ul>
            </nav>
            <a href="#">
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
                <section className="list-blog">
                    <div className="list-item">
                        <Link className="link-blog" to='/blog/firebase-co-nen-dung-cho-ung-dung-lon/'>
                            <h3>Firebase (Realtime Database) có nên dùng cho các ứng dụng lớn</h3>
                        </Link>
                        <Link className="link-blog" to='/blog/bnb-giu-chan-user'>
                            <h3>Airbnb đã giữ chân user như thế nào ?</h3>
                        </Link>
                    </div>
                </section>
        </div>
    )
}