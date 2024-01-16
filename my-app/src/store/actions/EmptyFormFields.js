
const EmptyFormFields = () => {
    document.getElementById("customer_PhoneNumber").value = "";
    document.getElementById("customer_email").value = "";
    document.getElementById("customer_familyName").value = "";
    document.getElementById("customer_firstName").value = "";
    document.getElementById("customer_middleName").value = "";
    document.getElementById("customer_dateOfBirth").value = "";
    document.getElementById("customer_countryOfLiving").value = "";
    document.getElementById("customer_comments").value = "";
  };

  export default EmptyFormFields;