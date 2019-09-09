import React from 'react';
// import "antd/dist/antd.css";
import './assets/bootstrap.min.css';
import '@sweetalert2/theme-borderless/borderless.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import GlobalContext from './contexts';
import IndexPage from './pages';
import AboutPage from './pages/about';

function App() {
  return (
      <GlobalContext>
        <Router>
          <Route exact path="/" render={() => <Redirect to="/game" />} />
          <Route exact path="/game" component={IndexPage} />
          <Route exact path="/about" component={AboutPage} />
          {/* <Route exact path="/game" component={IndexPage} /> */}
        </Router>
      </GlobalContext>
  );
}

export default App;
