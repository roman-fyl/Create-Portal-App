import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigation } from '../../../store/actions/navigation';

import "./ReadCustomer.scss"

const ReadCustomer = () => {
  const location = useLocation()
  const customer = location.state?.customerData || {}
  const navigate = useNavigation();
  const [formData, setFormData] = useState({
    phoneNumber: '',
    email: '',
    familyName: '',
    firstName: '',
    middleName: '',
    dateOfBirth: '',
    countryOfLiving: '',
    gender: '',
    visitedCountries: '',
    preferencesToVisit: '',
    hobbies: '',
    interests: '',
    comments: ''
  });


  useEffect(() => {
    setFormData(prevData => {
      if (prevData !== customer) {
        return customer;
      }
      return prevData;
    });
  }, [customer]);


  const handleEditButtonClick = () => {
    if (customer) {
      const customerData = { ...customer };
      console.log('Navigate to Edit with data:', customerData);
      navigate("/edit", { state: { customerData } });
      console.log('Action is going to Edit');
      return;
    }
  };

  return (
    <div className='main'>
      <div className='container__header'>
        <h2>Customer Profile</h2>
        <div>
          <input type="button" className="button__create" value="Edit" onClick={() => handleEditButtonClick(customer)}></input>
        </div>
      </div>
      <div>
        <div className="block__elements">
          <div className="block__element">
            <span>idN</span>
            <span className="add__field" id="customer_idn">{customer.idN}</span>
          </div>
          <div className="block__element">
            <span>Date Created</span>
            <span className="add__field">{customer.timing ? customer.timing.slice(0, 10) : ''}</span>
          </div>
        </div>
        <div className="block__elements">
          <div className="block__element">
            <span>Phone Number</span>
            <span className="add__field">{customer.phoneNumber}</span>
          </div>
          <div className="block__element">
            <span>Email</span>
            <span className="add__field">{customer.email}</span>
          </div>
        </div>
        <div className="block__elements">
          <div className="block__element">
            <span>Family Name</span>
            <span className="add__field">{customer.familyName}</span>
          </div>
          <div className="block__element">
            <span>First Name</span>
            <span className="add__field">{customer.firstName}</span>
          </div>
          <div className="block__element">
            <span>Middle Name</span>
            <span className="add__field">{customer.middleName}</span>
          </div>
        </div>
        <div className="block__elements">
          <div className="block__element">
            <span>Date of Birth</span>
            <span className="add__field">{customer.dateOfBirth}</span>
          </div>
          <div className="block__element">
            <span>Country of living</span>
            <span className="add__field">{customer.countryOfLiving}</span>
          </div>
        </div>
        <div className="customer__gender">
          <span>Gender</span>
          <span className="add__field">{customer.gender}</span>
        </div>
        <div className="block__elements">
          <div className="block__element">
            <span>Visited Countries</span>
            <span className="add__field">{customer.visitedCountries}</span>
          </div>
        </div>
        <div className="block__elements">
          <div className="block__element">
            <span>Preferences to visit</span>
            <span className="add__field">{customer.preferencesToVisit}</span>
          </div>
        </div>
        <div className="block__elements">
          <div className="block__element">
            <span>Hobbies</span>
            <span className="add__field">{customer.hobbies}</span>
          </div>
        </div>
        <div className="block__elements">
          <div className="block__element">
            <span htmlFor="customer_interests">Interests</span>
            <span className="add__field">{customer.interests}</span>
          </div>
        </div>
        <div className="block__elements">
          <div className="block__element block__element__comments">
            <span htmlFor="customer_comments">Comments</span>
            <span className="add__field">{customer.comments}</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ReadCustomer;