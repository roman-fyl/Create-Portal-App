import { useState, useEffect } from "react";
import { useNavigation, navigateTo } from "../../store/actions/navigation";
import ReadLocalStorageAll from "../../store/api/ReadLocalStorageAll.js";

import "./Customers.scss"

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [totalcustomers, setTotalCustomers] = useState([]);



  useEffect(() => {
    const localStorageData = ReadLocalStorageAll();
    setTotalCustomers(localStorageData.length)

    if (localStorageData && localStorageData.length > 0) {
      setCustomers(localStorageData);
    } else {
      setCustomers([]);
    }
  }, []);


  const navigate = useNavigation();

  const handleCreateButtonClick = () => {
    navigateTo(navigate, '/create-customer');
  }

  const handleReadButtonClick = (customer) => {
    if (customer) {
      const customerData = { ...customer };
      navigate('/profile', { state: { customerData: customerData } });
      console.log("Clicked customer:", customer);
    }
  };



  return (
    <div className='main'>
      <div className='container__header'>
        <h2>Customers({totalcustomers})</h2>
        <div className='search__container'><span>Filter: Family | Country | Phone</span>
          <input type="text" className="search__field" tabIndex="1" name="search" placeholder="Search by" minLength="3" maxLength="20" required></input>
        </div>
        <div>
          <input type="button" className="button__create" value="Create" onClick={handleCreateButtonClick}></input>
        </div>
      </div>
      <ul className="customers__list">
        <li className="customer__header">
          <span className="surname">Last Name</span>
          <span className="name">First Name</span>
          <span className="phone">Phone</span>
          <span className="total-tours">Total trips</span>
          <span className="date">Date adding</span>
        </li>
        {customers ? (
          customers.map((customer) => (
            <a key={customer.idN} onClick={() => handleReadButtonClick(customer)}>
              <li key={customer.idN} className="customer__item" attr={customer.idN}>
                <span className="surname">{customer.familyName}</span>
                <span className="name">{customer.firstName}</span>
                <span className="phone">{customer.phoneNumber}</span>
                <span className="total-tours">{customer.totalTrips}</span>
                <span className="date">{customer.timing ? customer.timing.slice(0, 10) : ''}</span>
              </li>
            </a>
          ))
        ) : (
          <p>Loading...</p>
        )}

      </ul>

    </div>
  )
};

export default Customers;