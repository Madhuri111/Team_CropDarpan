import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Testimonials from './Testimonials/Testimonials';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';

const sections = () => {
  return (
    <Fragment>
      <Home />
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/Testimonials" component={Testimonials} />
              <Route path="/Gallery" component={Gallery} />
              <Route path="/contact" component={Contact} />
            </Switch>
        </Router>
      </div>
    </Fragment>
  );
};

export default sections;
