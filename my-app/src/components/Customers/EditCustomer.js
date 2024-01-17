import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigation } from "../../store/actions/navigation";
import EmptyFormFields from "../../store/actions/EmptyFormFields";
import VerificationDataFromFields from "../../store/actions/VerificationDataFromFields"


const EditCustomer = () => {
  const location = useLocation();
  const navigate = useNavigation();
  const customer = location.state?.customerData || {};
  
  console.log('Customer data in EditCustomer:', customer);

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
  
  const handleSaveButtonClick = () => {
    const existingCustomerId = customer.idN;
    const time = customer.timing
    const updatedCustomer = VerificationDataFromFields(existingCustomerId, time);
    
  
    if (updatedCustomer && Object.keys(updatedCustomer).length > 0) {
      console.log('Data saved successfully:', updatedCustomer);
    } else {
      console.error('Failed to save data. Updated data is empty or undefined.');
    }
    EmptyFormFields();
    navigate("/customers");
    console.log('DATA UPDATED');
  };
  
  
  

  const handleCancelButtonClick = () => {
    if (customer) {
      const customerData = { ...customer };
      navigate("/profile", { state: { customerData } });
      return;
    }
  };

  useEffect(() => {
    setFormData(customer);
  }, [customer]);


 return (
    <div className="main">
      <div className="container__header__create-customer">
        <h2>Edit Customer</h2>
      </div>
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
                value={formData.phoneNumber}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, phoneNumber: e.target.value }))}
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
                value={formData.email}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, email: e.target.value }))}
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
                name="familyName"
                placeholder="Family name"
                minLength="3"
                maxLength="15"
                value={formData.familyName}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, familyName: e.target.value }))}
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
                value={formData.firstName}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, firstName: e.target.value }))}
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
                value={formData.middleName}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, middleName: e.target.value }))}
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
                value={formData.dateOfBirth}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, dateOfBirth: e.target.value }))}
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
                value={formData.countryOfLiving}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, countryOfLiving: e.target.value }))}
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
                  checked={formData.gender === "Male"}
                  onChange={() => setFormData((prevData) => ({ ...prevData, gender: "Male" }))}
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
                  checked={formData.gender === "Female"}
                  onChange={() => setFormData((prevData) => ({ ...prevData, gender: "Female" }))}
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
                  checked={formData.gender === "Other"}
                  onChange={() => setFormData((prevData) => ({ ...prevData, gender: "Other" }))}
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
                value={formData.visitedCountries}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, visitedCountries: e.target.value }))}
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
                value={formData.preferencesToVisit}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, preferencesToVisit: e.target.value }))}
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
                value={formData.hobbies}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, hobbies: e.target.value }))}
                required
              ></input>
            </div>
            <div className="block__element">
              <div className="customer__tags"></div>
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
                value={formData.interests}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, interests: e.target.value }))}
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
                value={formData.comments}
                onChange={(e) => setFormData((prevData) => ({ ...prevData, comments: e.target.value }))}
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
              value="Save"
              onClick={handleSaveButtonClick}
            ></input>
          </div>
        </form>
    </div>
  );
}

export default EditCustomer