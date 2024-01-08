import SaveLocalStorage from "../../../store/api/SaveLocalStorage";


const extractFormData = () => {

    const customer = {};

    const fieldCustomerPhone = document.getElementById('customer_PhoneNumber');
    if(fieldCustomerPhone) {
        customer.phoneNumber = fieldCustomerPhone.value;
    }

    const fieldCustomerEmail = document.getElementById('customer_email');
    if(fieldCustomerEmail) {
        customer.email = fieldCustomerEmail.value;
    }

    const fieldCustomerFamilyName = document.getElementById('customer_familyName');
    if(fieldCustomerFamilyName) {
        customer.familyName = fieldCustomerFamilyName.value;
    }

    const fieldCustomerFirstName = document.getElementById('customer_firstName');
    if(fieldCustomerFirstName) {
        customer.firstName = fieldCustomerFirstName.value;
    }

    const fieldCustomerMiddleName = document.getElementById('customer_middleName');
   if(fieldCustomerMiddleName) {
    customer.middleName = fieldCustomerMiddleName.value;
   }
    const fieldDateOfBirth = document.getElementById('customer_dateOfBirth');
   if(fieldDateOfBirth) {
    customer.dateOfBirth = fieldDateOfBirth.value;

   }
    const fieldCountryOfLiving = document.getElementById('customer_countryOfLiving');
   if(fieldCountryOfLiving) {
    customer.countryOfLiving = fieldCountryOfLiving.value;
   }

    const selectedGender = document.querySelector('input[name="gender"]:checked');
    if (selectedGender) {
        customer.gender = selectedGender.value;
    } else {
        console.log('Please select Gender')
    }

    const fieldVisitedCountries = document.getElementById('customer_visitedCountries');
    if (fieldVisitedCountries) {
      const visitedCountriesAll = [fieldVisitedCountries.value];
      customer.visitedCountries = visitedCountriesAll;
    }

    const fieldPreferencesToVisit = document.getElementById('customer_preferencesToVisit');
    if(fieldPreferencesToVisit) {
    const preferencesToVisitAll = []
    preferencesToVisitAll.push(fieldPreferencesToVisit.value)
    customer.preferencesToVisit = preferencesToVisitAll;
    }

    const fieldHobbies = document.getElementById('customer_hobbies');
    if(fieldHobbies) {
        const hobbiesAll = []
    hobbiesAll.push(fieldHobbies.value)
    customer.hobbies = hobbiesAll;
    }

    const fieldInterests = document.getElementById('customer_interests');
    if(fieldInterests) {
        const interestsAll = []
    interestsAll.push(fieldInterests.value)
    customer.interests = interestsAll;
    }

    customer.comments = document.getElementById('customer_comments').value;

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
