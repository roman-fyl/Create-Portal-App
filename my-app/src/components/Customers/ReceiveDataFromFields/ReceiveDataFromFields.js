import SaveLocalStorage from "../../../store/api/SaveLocalStorage";


const ReceiveDataFromFields = () => {

    const customer = {};

    const fieldCustomerPhone = document.getElementById('customer_PhoneNumber');
    customer.phoneNumber = fieldCustomerPhone.value;

    const fieldCustomerEmail = document.getElementById('customer_email');
    customer.email = fieldCustomerEmail.value;

    const fieldCustomerFamilyName = document.getElementById('customer_familyName');
    customer.familyName = fieldCustomerFamilyName.value;

    const fieldCustomerFirstName = document.getElementById('customer_firstName');
    customer.firstName = fieldCustomerFirstName.value;

    const fieldCustomerMiddleName = document.getElementById('customer_middleName');
    customer.middleName = fieldCustomerMiddleName.value;

    const fieldDateOfBirth = document.getElementById('customer_dateOfBirth');
    customer.dateOfBirth = fieldDateOfBirth.value;

    const fieldCountryOfLiving = document.getElementById('customer_countryOfLiving');
    customer.countryOfLiving = fieldCountryOfLiving.value;

    const selectedGender = document.querySelector('input[name="gender"]:checked');
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

    const fieldComments = document.getElementById('customer_comments');
    customer.customer_comments = fieldComments.value;

    console.log('Customer:', customer);

    SaveLocalStorage({ key: 'id', value: customer });

    return customer;
};

export default ReceiveDataFromFields;
