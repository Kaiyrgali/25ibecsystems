import React from 'react';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ErrorBoundary from '../ErrorBoundary';
import Aside from '../Aside';
import Header from '../Header/Header';
import Home from '../../routers/Home';
import Browse from '../../routers/Browse';
import Details from '../../routers/Details';
import NotFound from '../../routers/NotFound';
// import store from '../../redux/store';
import './App.scss';

function App() {
    

  return (
    // <Provider store={store}>
    //   <ErrorBoundary>
        <Router>
          <Header />
          <div className="Container">
            <Aside />
            <Routes className="Main">
              <Route path="/" element={<Home />} />
              <Route path="/browse" element={<Browse />} />
              <Route path="/games/:name" element={<Details />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
         </Router>
    //   </ErrorBoundary>
    // </Provider>
  );
}

export default App;
