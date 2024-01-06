import React, { useState, useEffect } from "react";

import "./CreateCustomer.scss"

const CreateCustomer = () => {
  return (
    <div className="main">
      <div className="container__header__create-customer">
        <h2>Create New Customer</h2>
      <form action="/submit">
      <div className="block__elements">
        <div className="block__element"><label for="customer_PhoneNumber">Phone Number</label>
        <input type="phone" className="add__field" tabindex="1" name="customer_PhoneNumber" placeholder="Phone Number +1" minlength="12" maxlength="15" required></input>
        </div>
        <div className="block__element"><label for="customer_email">Email</label>
        <input type="email" className="add__field" tabindex="2" name="customer_email" placeholder="Email" minlength="6" maxlength="40" required></input>
        </div>
      </div>
      <div className="block__elements">
        <div className="block__element"><label for="familyName">Family Name</label>
        <input type="text" className="add__field" tabindex="3" name="familytName" placeholder="Family name" minlength="3" maxlength="15" required></input>
        </div>
        <div className="block__element"><label for="firstName">First Name</label>
        <input type="text" className="add__field" tabindex="4" name="firstName" placeholder="First name" minlength="3" maxlength="15" required></input>
        </div>
        <div className="block__element"><label for="middleName">Middle Name</label>
        <input type="text" className="add__field" tabindex="5" name="middleName" placeholder="Middle name" minlength="3" maxlength="15"></input>
        </div>

      </div>
      <div className="block__elements">
      <div className="block__element"><label for="customer_mainDateOfBirth">Date of Birth</label>
        <input type="date" className="add__field" tabindex="6" name="customer_mainDateOfBirth" required></input>
        </div>
        <div className="block__element"><label for="customer_countryOfLiving">Country of living</label>
        <input type="text" className="add__field" tabindex="7" name="customer_countryOfLiving" placeholder="Country of living" minlength="3" maxlength="15" required></input>
        </div>
      </div>
      <div className="customer__gender">
          <legend>Gender</legend>
          <div className="customer__options">
            <div className="customer__option">
                  <input type="radio" tabindex="8" name="gender" value="Male" id="male"></input>
                  <label for="male">Male</label>
              </div>
              <div className="customer__option">
                  <input type="radio" tabindex="9" name="gender" value="Female" id="female"></input>
                  <label for="female">Female</label>
              </div>
              <div className="customer__option">
                  <input type="radio" tabindex="10" name="gender" value="other" id="other"></input>
                  <label for="other">Other</label>
              </div>
          </div>
      </div>
      <div className="block__elements">
        <div className="block__element"><label for="customer_visitedCountries">Visited Countries</label>
        <input type="text" className="add__field" tabindex="11" name="customer_visitedCountries" placeholder="Add Country" minlength="3" maxlength="15" required></input>
        </div>
        <div className="block__element">
          <div className="customer__tags"><span>Poland</span><span>United States</span></div>
        </div>
      </div>
      <div className="block__elements">
        <div className="block__element"><label for="customer_preferencesToVisit">Preferences to visit</label>
        <input type="text" className="add__field" tabindex="12" name="customer_preferencesToVisit" placeholder="Add Country" minlength="3" maxlength="15" required></input>
        </div>
        <div className="block__element">
          <div className="customer__tags"><span>Canada</span><span>Mexico</span></div>
        </div>
      </div>
      <div className="block__elements">
        <div className="block__element"><label for="customer_Hobbies">Hobbies</label>
        <input type="text" className="add__field" tabindex="13" name="customer_Hobbies" placeholder=" Add Hobby" minlength="3" maxlength="15" required></input>
        </div>
        <div className="block__element">
          <div className="customer__tags"><span>Hiking</span></div>
        </div>
      </div>
      <div className="block__elements">
        <div className="block__element"><label for="customer_Interests">Interests</label>
        <input type="text" className="add__field" tabindex="14" name="customer_Interests" placeholder="Add interest" minlength="3" maxlength="15" required></input>
        </div>
        <div className="block__element">
          <div className="customer__tags"><span>Read Books</span></div>
        </div>
      </div>
      <div className="block__elements">
        <div className="block__element block__element__comments"><label for="customer_comments">Comments</label>
        <textarea className="add__field customer__comments" tabindex="15" name="customer_comments" placeholder="..." minlength="4" required></textarea>
        </div>
      </div>
      <div className="block__elements">
    <div className="block__element block__element__channel">
      <label for="how-did-you-hear-us">How did you hear about us?</label>
      <select name="how-did-you-hear-us" tabindex="16" id="how-did-you-hear-us">
          <option value="social-media">Social Media</option>
          <option value="google-search">Google Search</option>
          <option value="friend-relative">Friend/Relative</option>
          <option value="exististing-customer">Existing Customer</option>
          <option value="employee">Employee</option>
          <option value="other">Other</option>
      </select>
      <input type="text" className="add__field" tabindex="17" name="customer_PhoneNumber" placeholder="Be specific" minlength="3" maxlength="15" required></input>
  </div>
</div>
      <div className="customer__buttons">
          <input type="button" className="button__cancel" value="Cancel"></input>
          <input type="button" className="button__delete" value="Delete"></input>
          <input type="button" className="button__create" value="Create"></input>
        </div>
      </form>
        
      </div>

    </div>
  )
};

export default CreateCustomer;