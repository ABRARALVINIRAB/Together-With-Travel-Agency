import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './pages/Home/Services/Services';
import Experts from './pages/Home/Experts/Experts';
import Banner from './pages/Home/Banner/Banner';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/Home/NotFound/NotFound';
import Booking from './pages/Booking/Booking';
import Login from './pages/Login/Login';
import Header from './pages/Shared/Header/Header';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Registration from './pages/Registration/Registration';
import Service from './pages/Home/Service/Service';
import Footer from './pages/Shared/Footer/Footer';
import Appointment from './pages/Appointment/Appointment';

import About from './pages/About/About';
import Orders from './pages/MyOrders/MyOrders';
import ManageOrders from './pages/ManageOrders/ManageOrders';
import AddNew from './pages/AddNewService/AddNewService';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/orders">
              <Orders></Orders>
            </Route>
            <Route path="/manageOrders">
              <ManageOrders></ManageOrders>
            </Route>
            <Route path="/addNew">
              <AddNew></AddNew>
            </Route>

            <Route path="/appointment">
              <Appointment></Appointment>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
