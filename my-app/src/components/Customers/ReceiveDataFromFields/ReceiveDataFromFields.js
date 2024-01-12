import SaveLocalStorage from "../../../store/api/SaveLocalStorage";
import errorFieldNotification from "../../../store/actions/errorFieldNotification";
import { GenerateId } from "../GenerateId";

const extractFormData = async () => {
    const customer = {};

    const fieldCustomerPhone = document.getElementById("customer_PhoneNumber");
    if (fieldCustomerPhone && fieldCustomerPhone.value) {
        const phoneNumber = fieldCustomerPhone.value;
        if (phoneNumber.length > 9 && typeof phoneNumber === "string") {
            customer.phoneNumber = phoneNumber;
        } else {
            errorFieldNotification(fieldCustomerPhone);
        }
    }

    const fieldCustomerEmail = document.getElementById("customer_email");
    if (fieldCustomerEmail && fieldCustomerEmail.value) {
        const email = fieldCustomerEmail.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (emailRegex.test(email)) {
            customer.email = email;
        } else {
            errorFieldNotification(fieldCustomerEmail);
        }
    }
    
    const fieldCustomerFamilyName = document.getElementById("customer_familyName");
    if (fieldCustomerFamilyName && fieldCustomerFamilyName.value) {
        const familyName = fieldCustomerFamilyName.value;
        if (familyName.length > 2 && typeof familyName === 'string') {
            customer.familyName = familyName;
        } else {
            errorFieldNotification(fieldCustomerFamilyName);
        }
    }

    const fieldCustomerFirstName = document.getElementById("customer_firstName");
    if (fieldCustomerFirstName && fieldCustomerFirstName.value) {
        const firstName = fieldCustomerFirstName.value;
        if (firstName.length > 1 && typeof firstName === 'string') {
            customer.firstName = firstName;
        } else {
            errorFieldNotification(fieldCustomerFirstName);
        }
    }

    const fieldCustomerMiddleName = document.getElementById("customer_middleName");
    if (fieldCustomerMiddleName && fieldCustomerMiddleName.value) {
        const middleName = fieldCustomerMiddleName.value;
        if (typeof middleName === 'string') {
            customer.middleName = middleName;
        } else {
            errorFieldNotification(fieldCustomerMiddleName);
        }
    }
    
    const fieldDateOfBirth = document.getElementById("customer_dateOfBirth");
    if (fieldDateOfBirth && fieldDateOfBirth.value) {
        const dateOfBirth = fieldDateOfBirth.value;
        if (dateOfBirth.length > 9 && typeof dateOfBirth === 'string') {
            customer.dateOfBirth = dateOfBirth;
        } else {
            errorFieldNotification(fieldDateOfBirth);
        }
    }
 
    const fieldCountryOfLiving = document.getElementById("customer_countryOfLiving");
    if (fieldCountryOfLiving && fieldCountryOfLiving.value) {
        const countryOfLiving = fieldCountryOfLiving.value;
        if (countryOfLiving.length > 1 && typeof countryOfLiving === 'string') {
            customer.countryOfLiving = countryOfLiving;
        } else {
            errorFieldNotification(fieldCountryOfLiving);
        }
    }

    const fieldSelectedGender = document.querySelector('input[name="gender"]:checked');
    if (fieldSelectedGender && fieldSelectedGender.value) {
        customer.gender = fieldSelectedGender.value;
    } else {
        errorFieldNotification(fieldSelectedGender);
    }

    const fieldComments = document.getElementById("customer_comments");
    if (fieldComments && fieldComments.value) {
        const comments = fieldComments.value;
        if (comments.length > 1 && typeof comments === 'string') {
            customer.comments = comments;
        } else {
            errorFieldNotification(fieldComments);
        }
    }

    if (customer.phoneNumber && 
        customer.email && 
        customer.familyName && 
        customer.firstName && 
        customer.dateOfBirth &&
        customer.countryOfLiving &&
        customer.gender) {
        customer.idN = GenerateId();
        SaveLocalStorage({ key: customer.idN, value: customer });
        console.log(customer);
        return customer;
    } else {
        console.log("Please fix errors");
    }
};

const ReceiveDataFromFields = () => {
    const customer = extractFormData();
    return customer;
};

export default ReceiveDataFromFields;
