import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from '../LoginPage/LoginPage'
import SchedulesPage from '../../components/SchedulesPage/SchedulesPage';
import SignupPage from '../SignupPage/SignupPage';
// import SignupForm from '../../components/SignupForm/SignupForm';
import userService from '../../utils/userService';
// import tokenService from '../../utils/tokenService';
import './App.css';
// import NavBar from '../../components/NavBar/NavBar';



class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(),
      meeting: ['Coffee with Hagen'],
      user: 'Dev',
      // Initialize user if there's a token, otherwise null
      user: userService.getUser()
    };
  }
  getInitialState() {
    return {
      meeting: ['Coffee with Hagen'],
      user: 'Dev'
    };
  }


  /*--- Callback Methods ---*/
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }



  // state = {
  //   meeting: [],
  //   user: ''
  // };

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1>mySchedule</h1>

          {/* routes in nav bar */}

          <Switch>
            <Route exact path='/' render={() =>
              <SchedulesPage
                handleLogout={this.handleLogout}
                user={this.state.user}
              />
            } />
            {/* <SchedulesPage /> */}


            <Route exact path='/signup' render={({ history }) =>
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            } />
            <Route exact path='/login' render={({ history }) =>
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            } />
            <Redirect to='/login' />
            }/>
        </Switch>
        </header>
        <div className="body">


          <div>mySchedule</div>

        </div>
      </div >

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
