import React, { useState, useEffect } from 'react';
import CreateCustomer from './CreateCustomer/CreateCustomer';

import "./Customers.scss"

const Customers = () => {

  const [iscreateCustomer, setCreateCustomer] = useState(false)
  const createCustomer = () => {
    setCreateCustomer(true)
  }
 return (
    <div className='main'>
      {iscreateCustomer && <CreateCustomer />}
      {!iscreateCustomer && (      <div className='container__header'>
    <h2>Customers(1)</h2>
    <div className='search__container'><span>Filter: Family | Country | Phone</span>
        <input type="text" className="search__field" tabindex="1" name="search" placeholder="Search by" minlength="3" maxlength="20" required></input>
    </div>
    <div>
        <input type="button" className="button__create" value="Create" onClick={createCustomer}></input>
        </div>
    </div>)}
    {!iscreateCustomer && (<ul className="customers__list">
    <li className="customer__header">
        <span className="surname">Last Name</span>
        <span className="name">First Name</span>
        <span className="phone">Phone</span>
        <span className="total-tours">Total trips</span>
        <span className="date">Date adding</span>
      </li>
      <li className="customer__item" attr="1">
        <span className="surname">Last Name</span>
        <span className="name">First Name</span>
        <span className="phone">Phone</span>
        <span className="total-tours">Total trips</span>
        <span className="date">Date adding</span>
      </li>
      <li className="customer__item" attr="1">
        <span className="surname">Last Name</span>
        <span className="name">First Name</span>
        <span className="phone">Phone</span>
        <span className="total-tours">Total trips</span>
        <span className="date">Date adding</span>
      </li>
    </ul>)}
    
</div>
 )
};

export default Customers;