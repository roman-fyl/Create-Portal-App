import errorFieldNotification from "./errorFieldNotification";
import { GenerateId } from "../../components/Customers/GenerateId";
import { DateTime } from "./createDate";
import SaveToLocal from "../api/SaveToLocal";

const VerificationDataFromFields = (existingCustomerId, time) => {

    const customer = {};


    const fieldCustomerPhone = document.getElementById("customer_PhoneNumber");
    if (fieldCustomerPhone && fieldCustomerPhone.value) {
        const phoneNumber = fieldCustomerPhone.value;
        if (phoneNumber.length > 8 && typeof phoneNumber === "string") {
            customer.phoneNumber = phoneNumber;
        } else {
            errorFieldNotification(fieldCustomerPhone);
        }
    }
    else {
        errorFieldNotification(fieldCustomerPhone);
  
    }

    const fieldCustomerEmail = document.getElementById("customer_email");
    if (fieldCustomerEmail && fieldCustomerEmail.value) {
        const email = fieldCustomerEmail.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email)) {
            customer.email = email;
        } else {
            errorFieldNotification(fieldCustomerEmail);
            console.log(errorFieldNotification(fieldCustomerEmail))
            // return
        }
    }
    else {
        errorFieldNotification(fieldCustomerEmail);
        console.log(errorFieldNotification(fieldCustomerEmail))
        // return
    }

    const fieldCustomerFamilyName = document.getElementById("customer_familyName");
    if (fieldCustomerFamilyName && fieldCustomerFamilyName.value) {
        const familyName = fieldCustomerFamilyName.value;
        if (familyName.length > 2 && typeof familyName === 'string') {
            customer.familyName = familyName;
        } else {
            errorFieldNotification(fieldCustomerFamilyName);
            console.log(errorFieldNotification(fieldCustomerFamilyName))
            // return
        }
    } else {
        errorFieldNotification(fieldCustomerFamilyName);
        console.log(errorFieldNotification(fieldCustomerFamilyName))
        // return
    }

    const fieldCustomerFirstName = document.getElementById("customer_firstName");
    if (fieldCustomerFirstName && fieldCustomerFirstName.value) {
        const firstName = fieldCustomerFirstName.value;
        if (firstName.length > 1 && typeof firstName === 'string') {
            customer.firstName = firstName;
        } else {
            errorFieldNotification(fieldCustomerFirstName);
            console.log(errorFieldNotification(fieldCustomerFirstName))
            // return
        }
    }
    else {
        errorFieldNotification(fieldCustomerFirstName);
        console.log(errorFieldNotification(fieldCustomerFirstName))
        // return
    }

    const fieldCustomerMiddleName = document.getElementById("customer_middleName");
    if (fieldCustomerMiddleName && fieldCustomerMiddleName.value) {
        const middleName = fieldCustomerMiddleName.value;
        if (typeof middleName === 'string') {
            customer.middleName = middleName;
        } else {
            errorFieldNotification(fieldCustomerMiddleName);
            console.log(errorFieldNotification(fieldCustomerMiddleName))
            // return
        }
    }
    else {
        errorFieldNotification(fieldCustomerMiddleName);
        console.log(errorFieldNotification(fieldCustomerMiddleName))
        // return
    }

    const fieldDateOfBirth = document.getElementById("customer_dateOfBirth");
    if (fieldDateOfBirth && fieldDateOfBirth.value) {
        const dateOfBirth = fieldDateOfBirth.value;
        if (dateOfBirth.length > 9 && typeof dateOfBirth === 'string') {
            customer.dateOfBirth = dateOfBirth;
        } else {
            errorFieldNotification(fieldDateOfBirth);
            console.log(errorFieldNotification(fieldDateOfBirth))
            // return
        }
    }
    else {
        errorFieldNotification(fieldDateOfBirth);
        console.log(errorFieldNotification(fieldDateOfBirth))
        // return
    }

    const fieldCountryOfLiving = document.getElementById("customer_countryOfLiving");
    if (fieldCountryOfLiving && fieldCountryOfLiving.value) {
        const countryOfLiving = fieldCountryOfLiving.value;
        if (countryOfLiving.length > 1 && typeof countryOfLiving === 'string') {
            customer.countryOfLiving = countryOfLiving;
        } else {
            errorFieldNotification(fieldCountryOfLiving);
            console.log(errorFieldNotification(fieldCountryOfLiving))
            // return
        }
    }
    else {
        errorFieldNotification(fieldCountryOfLiving);
        console.log(errorFieldNotification(fieldCountryOfLiving))
        // return
    }

    const fieldSelectedGender = document.querySelector('input[name="gender"]:checked');
    if (fieldSelectedGender && fieldSelectedGender.value) {
        customer.gender = fieldSelectedGender.value;
    } else {
        errorFieldNotification(fieldSelectedGender);
        console.log(errorFieldNotification(fieldSelectedGender))
        // return
    }


    const fieldComments = document.getElementById("customer_comments");
    if (fieldComments && fieldComments.value) {
        const comments = fieldComments.value;
        if (comments.length > 1 && typeof comments === 'string') {
            customer.comments = comments;
        } else {
            errorFieldNotification(fieldComments);
            console.log(errorFieldNotification(fieldComments))
            return
        }
    }
    else {
        errorFieldNotification(fieldComments);
        console.log(errorFieldNotification(fieldComments))
        return
    }

    if (customer.phoneNumber &&
        customer.email &&
        customer.familyName &&
        customer.firstName &&
        customer.dateOfBirth &&
        customer.countryOfLiving &&
        customer.gender) {
        if (existingCustomerId) {
            customer.idN = existingCustomerId;
        } else {
            customer.idN = GenerateId(existingCustomerId);
            customer.idN = GenerateId(customer.idN);
        }
        if (time) {
            customer.timing = time;
        } else {
            customer.timing = DateTime()
        }

        customer.totalTrips = 1;
        SaveToLocal({ key: customer.idN, value: customer });
        return customer;
    } else {
        console.log("Please fix errors");
    }
};

export default VerificationDataFromFields;