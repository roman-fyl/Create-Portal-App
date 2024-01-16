import React from "react";
import {Link} from 'react-router-dom';

import './Navigation.scss'

const Navigation = () => (
    <nav className="navigation">
      <ul className="nav-list">
        <li className="nav-item"><Link to="/"><div>Home</div></Link></li>
        <li className="nav-item"><Link to="/customers"><div>Customers</div></Link></li>
        <li className="nav-item"><Link to="/create-customer"><div>Create Customer</div></Link></li>
        <li className="nav-item"><Link to="/reservations"><div>Reservations</div></Link></li>
        <li className="nav-item"><Link to="/tours"><div>Tours</div></Link></li>
        <li className="nav-item"><Link to="/countries"><div>Countries</div></Link></li>
        <li className="nav-item"><Link to="/embassies"><div>Embassies</div></Link></li>

      </ul>
    </nav>
  );
  

export default Navigation