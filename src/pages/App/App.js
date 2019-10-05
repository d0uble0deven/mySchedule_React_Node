import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import LoginPage from '../LoginPage/LoginPage'
import SchedulesPage from '../../components/SchedulesPage/SchedulesPage';
import SignupPage from '../SignupPage/SignupPage';
// import './App.css';



class App extends Component {

  state = {
    meeting: []
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>mySchedule</h1>

          {/* routes in nav bar */}
          <BrowserRouter>
            <Switch>
              <nav>
                <Route exact path='/login' render={() =>
                  <LoginPage
                  />

                } />

                <Route exact path='/signup' render={({ history }) =>
                  <SignupPage
                    history={history}
                  />
                } />

                <Route exact path='/schedules-page' render={() =>
                  <SchedulesPage />
                } />


                <ul>
                  <li>Log In</li>
                  <li>Sign Up</li>
                </ul>
              </nav>
              <div>mySchedule</div>
            </Switch>
          </BrowserRouter>
        </header>

      </div>

    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
