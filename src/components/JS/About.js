import React from 'react';
import '../CSS/About.style.css'
export default function About(){
    return(
        <div>
            <nav className="nav">
                <ul className="list">
                    <li className="item">
                        <a class="linknav" href="/">Home</a>
                    </li>
                    <li className="item">
                        <a class="linknav" href="/blog">Blog</a>
                    </li>
                </ul>
            </nav>
            <div className="selfie"></div>
            <p>hello chao ban</p>
        </div>
    )
}