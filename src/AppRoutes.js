import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import ProjectList from './Views/ProjectList';
import ModelList from './Views/ModelList'
import NoteBook from './Views/NoteBook'
import Deployment from './Views/Deployment'
import Login from './Views/Login/Login'
import Logs from './Views/Logs'
import ModalComponent from './component/ModalComponents';
import Train from './Views/Train/Train'
import Annotation from './Views/Annotation/Annotation';
import Dashboard from "./Views/Dashboard"
import ModelOnboard from "./Views/ ModelOnboard"
import ModelRegister from "./Views/ModelRegister"
import Monitor from './Views/Monitor/Monitor';
import Sidebar from './component/SideBar/SideBar'
import HeaderTop from './component/Header/HeaderTop'

function RouteWrapper(props) {

  return (
    <>
      {
        !props.isLoggedIn ?
          <props.component />
          :
          <>
            <div>
              <HeaderTop props={props} />
              <div className="layout-wrapper">
                <Sidebar />
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


function AppRoutes(props) {


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={ProjectList} />
          <Route path="/model" component={ModelList} />
          <Route path="/notebook" component={NoteBook} />
          <Route path="/deployment" component={Deployment} />
          <Route path="/login" component={Login} />
          <Route path="/Logs" component={Logs} />
          <Route path="/modals" component={ModalComponent} />
          <Route path="/train" exact component={Train} />
          <Route path="/annotation" exact component={Annotation} />
          <Route path="/monitor" exact component={Monitor} />

          <Route path="/test1" exact component={Dashboard} />
          <Route path="/test2" exact component={ModelOnboard} />
          <Route path="/test3" exact component={ModelRegister} />

          {/* <Route path="/home" component={AlignedTickets} /> */}
        </Switch>
      </Router>

    </div>
  );
}

export default withRouter(AppRoutes);
