import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/stores/index'
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import PostsList from './components/PostsList/PostsList';



import './App.scss';

const App = () => {
   return (
   <Provider store={store}>
    <Router>
      <div className='wrapper'>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostsList />} />
          
        </Routes>
      </div>
   </Router>
   </Provider>
  );
}

export default App;
