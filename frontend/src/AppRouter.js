// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App'; // Import your main component (Home or the main component containing Navbar and other sections)
import ESummit from './components/ESummit/ESummit'; // Import your ESummitPage component

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/esummit" component={ESummit} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
