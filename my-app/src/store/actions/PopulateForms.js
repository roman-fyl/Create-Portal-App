
const PopulateForms = (data) => {
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

  export default PopulateForms;