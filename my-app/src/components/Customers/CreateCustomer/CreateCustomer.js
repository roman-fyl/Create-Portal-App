import React, { useEffect } from "react";
import ReceiveDataFromFields from "../ReceiveDataFromFields/ReceiveDataFromFields";

import "./CreateCustomer.scss"

const CreateCustomer = () => {

  const handleCreateButtonClick = () => {
    ReceiveDataFromFields()
  }
  useEffect(() => {

  }, [])

  return (
    <div className="main">
      <div className="container__header__create-customer">
        <h2>Create New Customer</h2>
        <form action="/submit">
          <div className="block__elements">
            <div className="block__element"><label htmlFor="customer_PhoneNumber">Phone Number</label>
              <input type="tel" className="add__field" tabIndex="1" id="customer_PhoneNumber" name="customer_PhoneNumber" placeholder="Phone Number +1" minLength="12" maxLength="15" required></input>
            </div>
            <div className="block__element"><label htmlFor="customer_email">Email</label>
              <input type="email" className="add__field" tabIndex="2" id="customer_email" name="customer_email" placeholder="Email" minLength="6" maxLength="40" required></input>
            </div>
          </div>
          <div className="block__elements">
            <div className="block__element"><label htmlFor="familyName">Family Name</label>
              <input type="text" className="add__field" tabIndex="3" id="customer_familyName" name="familytName" placeholder="Family name" minLength="3" maxLength="15" required></input>
            </div>
            <div className="block__element"><label htmlFor="firstName">First Name</label>
              <input type="text" className="add__field" tabIndex="4" id="customer_firstName" name="firstName" placeholder="First name" minLength="3" maxLength="15" required></input>
            </div>
            <div className="block__element"><label htmlFor="middleName">Middle Name</label>
              <input type="text" className="add__field" tabIndex="5" id="customer_middleName" name="middleName" placeholder="Middle name" minLength="3" maxLength="15"></input>
            </div>

          </div>
          <div className="block__elements">
            <div className="block__element"><label htmlFor="customer_DateOfBirth">Date of Birth</label>
              <input type="date" className="add__field" tabIndex="6" id="customer_dateOfBirth" name="customer_DateOfBirth" required></input>
            </div>
            <div className="block__element"><label htmlFor="customer_countryOfLiving">Country of living</label>
              <input type="text" className="add__field" tabIndex="7" id="customer_countryOfLiving" name="customer_countryOfLiving" placeholder="Country of living" minLength="3" maxLength="15" required></input>
            </div>
          </div>
          <div className="customer__gender">
            <legend>Gender</legend>
            <div className="customer__options">
              <div className="customer__option">
                <input type="radio" tabIndex="8" name="gender" value="Male" id="male"></input>
                <label htmlFor="male">Male</label>
              </div>
              <div className="customer__option">
                <input type="radio" tabIndex="9" name="gender" value="Female" id="female"></input>
                <label htmlFor="female">Female</label>
              </div>
              <div className="customer__option">
                <input type="radio" tabIndex="10" name="gender" value="other" id="other"></input>
                <label htmlFor="other">Other</label>
              </div>
            </div>
          </div>
          <div className="block__elements">
            <div className="block__element"><label htmlFor="customer_visitedCountries">Visited Countries</label>
              <input type="text" className="add__field" tabIndex="11" id="customer_visitedCountries" name="customer_visitedCountries" placeholder="Add Country" minLength="3" maxLength="15" required></input>
            </div>
            <div className="block__element">
              <div className="customer__tags"><span>Poland</span><span>United States</span></div>
            </div>
          </div>
          <div className="block__elements">
            <div className="block__element"><label htmlFor="customer_preferencesToVisit">Preferences to visit</label>
              <input type="text" className="add__field" tabIndex="12" id="customer_preferencesToVisit" name="customer_preferencesToVisit" placeholder="Add Country" minLength="3" maxLength="15" required></input>
            </div>
            <div className="block__element">
              <div className="customer__tags"><span>Canada</span><span>Mexico</span></div>
            </div>
          </div>
          <div className="block__elements">
            <div className="block__element"><label htmlFor="customer_hobbies">Hobbies</label>
              <input type="text" className="add__field" tabIndex="13" id="customer_hobbies" name="customer_hobbies" placeholder=" Add Hobby" minLength="3" maxLength="15" required></input>
            </div>
            <div className="block__element">
              <div className="customer__tags"><span>Hiking</span></div>
            </div>
          </div>
          <div className="block__elements">
            <div className="block__element"><label htmlFor="customer_interests">Interests</label>
              <input type="text" className="add__field" tabIndex="14" id="customer_interests" name="customer_interests" placeholder="Add interest" minLength="3" maxLength="15" required></input>
            </div>
            <div className="block__element">
              <div className="customer__tags"><span>Read Books</span></div>
            </div>
          </div>
          <div className="block__elements">
            <div className="block__element block__element__comments"><label htmlFor="customer_comments">Comments</label>
              <textarea className="add__field customer__comments" tabIndex="15" id="customer_comments" name="customer_comments" placeholder="..." minLength="4" required></textarea>
            </div>
          </div>
          <div className="customer__buttons">
            <input type="button" className="button__cancel" value="Cancel"></input>
            <input type="button" className="button__delete" value="Delete"></input>
            <input type="button" className="button__create" value="Create" onClick={handleCreateButtonClick}></input>
          </div>
        </form>

      </div>

    </div>
  )
};

export default CreateCustomer;