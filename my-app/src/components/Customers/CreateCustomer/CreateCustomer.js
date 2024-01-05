import React, { useState, useEffect } from 'react';

import "./CreateCustomer.scss"

const CreateCustomer = () => {
  return (
    <div className='main'>
      <div className='container__header__create-customer'>
        <h2>Create Customer</h2>

        <div>
          <input type="button" className="button__cancel" value="Cancel"></input>
          <input type="button" className="button__delete" value="Delete"></input>
          <input type="button" className="button__create" value="Create"></input></div>
      </div>

    </div>
  )
};

export default CreateCustomer;