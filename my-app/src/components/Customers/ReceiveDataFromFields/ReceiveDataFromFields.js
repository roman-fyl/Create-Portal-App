import SaveLocalStorage from "../../../store/api/SaveLocalStorage";
import getLocalStorage from "../../../store/api/ReadLocalStorage";


const extractFormData = () => {

    const customer = {};

    customer.phoneNumber = document.getElementById('customer_PhoneNumber').value;
    customer.email = document.getElementById('customer_email').value;
    customer.familyName = document.getElementById('customer_familyName').value;
    customer.firstName = document.getElementById('customer_firstName').value;
    customer.middleName = document.getElementById('customer_middleName').value;
    customer.dateOfBirth = document.getElementById('customer_dateOfBirth').value;
    customer.countryOfLiving = document.getElementById('customer_countryOfLiving').value;
    
    const selectedGender = document.querySelector('input[name="gender"]:checked').value;
    if (selectedGender) {
        customer.gender = selectedGender.value;
    } else {
        console.log('Please select Gender')
    }

    const fieldVisitedCountries = document.getElementById('customer_visitedCountries');
    const visitedCountriesAll = []
    visitedCountriesAll.push(fieldVisitedCountries.value)
    customer.visitedCountries = visitedCountriesAll;

    const fieldPreferencesToVisit = document.getElementById('customer_preferencesToVisit');
    const preferencesToVisitAll = []
    preferencesToVisitAll.push(fieldPreferencesToVisit.value)
    customer.preferencesToVisit = preferencesToVisitAll;

    const fieldHobbies = document.getElementById('customer_hobbies');
    const hobbiesAll = []
    hobbiesAll.push(fieldHobbies.value)
    customer.hobbies = hobbiesAll;

    const fieldInterests = document.getElementById('customer_interests');
    const interestsAll = []
    interestsAll.push(fieldInterests.value)
    customer.interests = interestsAll;

    customer.customer_comments = document.getElementById('customer_comments').value;

    console.log('Customer:', customer);

    SaveLocalStorage({ key: 'id', value: customer });

    return customer;
};

const ReceiveDataFromFields = () => {
    const customer = extractFormData();
    SaveLocalStorage({ key: 'id', value: customer});
    return customer;
}

export default ReceiveDataFromFields;
