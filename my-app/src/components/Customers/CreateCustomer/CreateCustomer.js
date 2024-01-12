import React, { useState, useEffect } from "react";
import ReceiveDataFromFields from "../ReceiveDataFromFields/ReceiveDataFromFields";
import ReadLocalStorage from "../../../store/api/ReadLocalStorage";
import CleanLocalStorage from "../../../store/api/CleanLocalStorage";
import { useNavigation, navigateTo } from "../../../store/actions/navigation";
import "./CreateCustomer.scss";
import { data } from "../../../DataBase/customers";

const CreateCustomer = () => {

  const [activeCustomerIndex, setActiveCustomerIndex] = useState(0);

  const navigate = useNavigation();

  const handleCreateButtonClick = () => {
    ReceiveDataFromFields();
    // emptyFormFields();
    // CleanLocalStorage(customerId);

  };

  const handleCancelButtonClick = () => {
    navigateTo(navigate, "/customers");
  };
  const handleDeleteButtonClick = () => {
    const customerId = data[activeCustomerIndex].idN;
    console.log(customerId);
    CleanLocalStorage(customerId);
    emptyFormFields();
  };
  const handleEnterPress = async (event) => {
    if (event.key === 'Enter') {
      console.log("enter");
      document.querySelector('input').closest.value = "";
      return
    }
  };


  useEffect(() => {
    const storedData = ReadLocalStorage("uniqueID");
    if (storedData) {
      populateFormFields(storedData);
    }
  }, []);

  const emptyFormFields = () => {
    document.getElementById("customer_PhoneNumber").value = "";
    document.getElementById("customer_email").value = "";
    document.getElementById("customer_familyName").value = "";
    document.getElementById("customer_firstName").value = "";
    document.getElementById("customer_middleName").value = "";
    document.getElementById("customer_dateOfBirth").value = "";
    document.getElementById("customer_countryOfLiving").value = "";
    document.getElementById("customer_comments").value = "";
  };

  const populateFormFields = (data) => {
    document.getElementById("customer_PhoneNumber").value = data.phoneNumber;
    document.getElementById("customer_email").value = data.email;
    document.getElementById("customer_familyName").value = data.familyName;
    document.getElementById("customer_firstName").value = data.firstName;
    document.getElementById("customer_middleName").value = data.middleName;
    document.getElementById("customer_dateOfBirth").value = data.dateOfBirth;
    document.getElementById("customer_countryOfLiving").value =
      data.countryOfLiving;
    const selectedGenderElement = document.querySelector(
      `input[name="gender"][value="${data.gender}"]`
    );
    if (selectedGenderElement) {
      selectedGenderElement.checked = true;
    } else {
      console.log("Invalid gender value:", data.gender);
    }
    document.getElementById("customer_comments").value = data.comments;
  };

  return (
    <div className="main">
      <div className="container__header__create-customer">
        <h2>Create New Customer</h2>
        <form action="/submit">
          <div className="block__elements">
            <div className="block__element">
              <label htmlFor="customer_PhoneNumber">Phone Number</label>
              <input
                type="tel"
                className="add__field"
                tabIndex="1"
                id="customer_PhoneNumber"
                name="customer_PhoneNumber"
                placeholder="Phone Number +1"
                minLength="12"
                maxLength="15"
                required
              ></input>
            </div>
            <div className="block__element">
              <label htmlFor="customer_email">Email</label>
              <input
                type="email"
                className="add__field"
                tabIndex="2"
                id="customer_email"
                name="customer_email"
                placeholder="Email"
                minLength="6"
                maxLength="40"
                required
              ></input>
            </div>
          </div>
          <div className="block__elements">
            <div className="block__element">
              <label htmlFor="familyName">Family Name</label>
              <input
                type="text"
                className="add__field"
                tabIndex="3"
                id="customer_familyName"
                name="familytName"
                placeholder="Family name"
                minLength="3"
                maxLength="15"
                required
              ></input>
            </div>
            <div className="block__element">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="add__field"
                tabIndex="4"
                id="customer_firstName"
                name="firstName"
                placeholder="First name"
                minLength="3"
                maxLength="15"
                required
              ></input>
            </div>
            <div className="block__element">
              <label htmlFor="middleName">Middle Name</label>
              <input
                type="text"
                className="add__field"
                tabIndex="5"
                id="customer_middleName"
                name="middleName"
                placeholder="Middle name"
                minLength="3"
                maxLength="15"
              ></input>
            </div>
          </div>
          <div className="block__elements">
            <div className="block__element">
              <label htmlFor="customer_DateOfBirth">Date of Birth</label>
              <input
                type="date"
                className="add__field"
                tabIndex="6"
                id="customer_dateOfBirth"
                name="customer_DateOfBirth"
                required
              ></input>
            </div>
            <div className="block__element">
              <label htmlFor="customer_countryOfLiving">
                Country of living
              </label>
              <input
                type="text"
                className="add__field"
                tabIndex="7"
                id="customer_countryOfLiving"
                name="customer_countryOfLiving"
                placeholder="Country of living"
                minLength="3"
                maxLength="15"
                required
              ></input>
            </div>
          </div>
          <div className="customer__gender">
            <legend>Gender</legend>
            <div className="customer__options">
              <div className="customer__option">
                <input
                  type="radio"
                  tabIndex="8"
                  name="gender"
                  value="Male"
                  id="male"
                ></input>
                <label htmlFor="male">Male</label>
              </div>
              <div className="customer__option">
                <input
                  type="radio"
                  tabIndex="9"
                  name="gender"
                  value="Female"
                  id="female"
                ></input>
                <label htmlFor="female">Female</label>
              </div>
              <div className="customer__option">
                <input
                  type="radio"
                  tabIndex="10"
                  name="gender"
                  value="other"
                  id="other"
                ></input>
                <label htmlFor="other">Other</label>
              </div>
            </div>
          </div>
          <div className="block__elements">
            <div className="block__element">
              <label htmlFor="customer_visitedCountries">
                Visited Countries
              </label>
              <input
                type="text"
                className="add__field"
                tabIndex="11"
                name="customer_visitedCountries"
                placeholder="Add Country"
                id="customer_visitedCountries"
                minLength="3"
                maxLength="15"
                required
              ></input>
            </div>
            <div className="block__element">
              <div className="customer__tags" id="customer_visitedCountriesList">
              </div>
            </div>
          </div>
          <div className="block__elements">
            <div className="block__element">
              <label htmlFor="customer_preferencesToVisit">
                Preferences to visit
              </label>
              <input
                type="text"
                className="add__field"
                tabIndex="12"
                name="customer_preferencesToVisit"
                placeholder="Add Country"
                minLength="3"
                maxLength="15"
                required
              ></input>
            </div>
            <div className="block__element">
              <div
                className="customer__tags"
                id="customer_visitedCountries"
              ></div>
            </div>
          </div>
          <div className="block__elements">
            <div className="block__element">
              <label htmlFor="customer_hobbies">Hobbies</label>
              <input
                type="text"
                className="add__field"
                tabIndex="13"
                name="customer_hobbies"
                placeholder=" Add Hobby"
                minLength="3"
                maxLength="15"
                required
              ></input>
            </div>
            <div className="block__element">
              <div className="customer__tags" id="customer_hobbies"></div>
            </div>
          </div>
          <div className="block__elements">
            <div className="block__element">
              <label htmlFor="customer_interests">Interests</label>
              <input
                type="text"
                className="add__field"
                tabIndex="14"
                name="customer_interests"
                placeholder="Add interest"
                minLength="3"
                maxLength="15"
                required
              ></input>
            </div>
            <div className="block__element">
              <div className="customer__tags" id="customer_interests"></div>
            </div>
          </div>
          <div className="block__elements">
            <div className="block__element block__element__comments">
              <label htmlFor="customer_comments">Comments</label>
              <textarea
                className="add__field customer__comments"
                tabIndex="15"
                id="customer_comments"
                name="customer_comments"
                placeholder="..."
                minLength="4"
                required
              ></textarea>
            </div>
          </div>
          <div className="customer__buttons">
            <input
              type="button"
              className="button__cancel"
              value="Cancel"
              onClick={handleCancelButtonClick}
            ></input>
            {/* <input type="button" className="button__delete" value="Delete" onClick={handleDeleteButtonClick} ></input> */}
            <input
              type="button"
              className="button__create"
              value="Create"
              onClick={handleCreateButtonClick}
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCustomer;
