import './styles.scss';
import React, { Fragment } from 'react';
import Header from 'components/Header';
import Adopt from 'components/Adopt';
import About from 'components/About';
import Footer from 'components/Footer';
import { ToastContainer } from 'react-toastify';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class Puppers extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />

        <div className="container">
          <div className="heading">
            <h3>Welcome to CryptoPuppers</h3>
            <h2>Even digital doggos need a home</h2>
          </div>

          <Adopt />
          <RegistrationForm />
        </div>
        {/* Start of RegistrationForm */}
{/*         
        <div className="container d-flex align-items-center flex-column">
          <RegistrationForm />
            <Switch>
              <Route path="/" exact={true}>
                <RegistrationForm />
              </Route>
            </Switch>
          </div> */}

        {/* End of Registration Form */}

        <About />
        <Footer />
        <ToastContainer />
      </Fragment>
    );
  }
}
