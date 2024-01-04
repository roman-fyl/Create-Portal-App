import React from "react";
import {Link} from 'react-router-dom';

import './Navigation.scss'

const Navigation = () => (
    <nav>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        
    </ul>
</nav>
)

export default Navigation