import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/stores/index'
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Customers from './components/Customers/Customers';
import CreateCustomer from './components/Customers/CreateCustomer/CreateCustomer';
import PostsList from './components/PostsList/PostsList';
import ReadCustomer from './components/Customers/ReadCustomer/ReadCustomer';
import EditCustomer from './components/Customers/EditCustomer';



import './App.scss';

const App = () => {
   return (
   <Provider store={store}>
    <Router>
      <div className='wrapper'>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/create-customer" element={<CreateCustomer />} />
          <Route path="/profile" element={<ReadCustomer />} />
          <Route path="/edit" element={<EditCustomer />} />
        </Routes>
      </div>
   </Router>
   </Provider>
  );
}

export default App;
