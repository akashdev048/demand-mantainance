import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from "./Views/Dashboard"
import Demandmange from './Views/DemandManagement';
import DemandMaintenance from './Views/DemandMaintainance/DemandMaintenance';
function RouteWrapper(props) {

  return (
    <>
      {
        !props.isLoggedIn ?
          <props.component />
          :
          <>
            <div>
              <div className="layout-wrapper">
                <div className="pageLayout">
                  <props.component />
                </div>
              </div>
            </div>
          </>
      }

    </>
  );

}

function App(props) {
  
  const isLoggedIn =  true

  if (isLoggedIn) {
    return (
      <div className="App">
        <Routes>
        <Route path="/" element={<RouteWrapper component={DemandMaintenance} isLoggedIn={isLoggedIn} />} />
        <Route path="/home" element={<RouteWrapper component={Dashboard} isLoggedIn={isLoggedIn} />} />
        <Route path="/demand-manage" element={<RouteWrapper component={Demandmange} isLoggedIn={isLoggedIn} />} />
        <Route path="/demandMaintenance" element={<RouteWrapper component={DemandMaintenance} isLoggedIn={isLoggedIn} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<RouteWrapper component={Dashboard} isLoggedIn={isLoggedIn} />} />
=        </Routes>
      </div>
    );
  }

}

export default App;
