import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from '../LoginPage/LoginPage'
import SchedulesPage from '../../components/SchedulesPage/SchedulesPage';
import SignupPage from '../SignupPage/SignupPage';
// import SignupForm from '../../components/SignupForm/SignupForm';
import userService from '../../utils/userService';
// import tokenService from '../../utils/tokenService';
import './App.css';
import NavBar from '../../components/NavBar/NavBar';
// import HomePage from '../../components/HomePage/HomePage'
import Month from '../../components/Schedule/Month/Month'
import Meeting from '../../components/Schedule/Meeting/Meeting'
import MeetingForm from '../../components/MeetingForm/MeetingForm'
import LandingPage from '../LandingPage/LandingPage';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

      schedule: [],
      user: userService.getUser(),
    }
  }


  // this.state = {
  //   ...this.getInitialState(),
  //   meeting: ['Coffee with Hagen'],
  //   user: 'Dev',
  //   // Initialize user if there's a token, otherwise null
  //   user: userService.getUser()
  // };

  // getInitialState() {
  //   return {
  //     meeting: ['Coffee with Hagen'],
  //     user: 'Dev'
  //   };
  // }

  /*--- CREATE FUNCTION ---*/

  addSchedule = (state) => {
    console.log(state)
    this.setState({
      schedule: [...this.state.schedule, state]
    });
  };


  /*--- DELETE FUNCTION ---*/

  // TODO_LIST
  deleteItem = (id) => {
    console.log(id)
    // first we copy the state and modify it
    let newSchedule = this.state.schedule.filter(
      item => this.state.schedule[id] !== item
    )
    // set the state
    this.setState({
      schedule: newSchedule
      // this.setState(({ list }) => ({
      //   Schedule: schedule.filter((toDo, index) => index !== state)
      //   // find piece and print state without piece
    });
  }

  // REACT-BLOG
  // handleDelete = id => {
  //   // first we copy the state and modify it
  //   let newSchedule = this.state.schedule.filter(
  //     item => this.state.schedule[id] !== item
  //   )
  //   // set the state
  //   this.setState({
  //     schedule: newSchedule
  //   })
  // }


  /*--- UPDATE FUNCTION ---*/

  updateSchedule = (id) => {
    console.log(id)
    // first we copy the state and modify it
    let newSchedule = this.state.schedule.filter(
      item => this.state.schedule[id] !== item
    )
    // set the state
    this.setState({
      schedule: newSchedule
      // this.setState(({ list }) => ({
      //   Schedule: schedule.filter((toDo, index) => index !== state)
      //   // find piece and print state without piece
    });
  }




  /*--- Callback Methods ---*/
  handleLogout = () => {
    userService.logout()
    this.setState({ user: null })
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() })
  }



  // state = {
  //   meeting: [],
  //   user: ''
  // }


  /*--- Lifecycle Methods ---*/

  // async componentDidMount() {
  //   const schedules = await schedules.getAll();
  //   this.setState({ schedules });
  // }



  render() {
    return (
      <div className="App">
        <header className="App-header">

          {/* <h1>mySchedule</h1> */}
          <NavBar
            user={this.state.user}
            logout={this.handleLogout}
          />

          {/* routes in nav bar */}

          <Switch>
            <Route exact path='/' render={() =>
              <div>
                <LandingPage
                  handleLogout={this.handleLogout}
                  user={this.state.user}


                // <div>
                //               // display of all upcoming events
                //               // click '+' button
                // </div>
                // getInitialState
                />
                {/* <MeetingForm />
                <Month />
                <Meeting /> */}
              </div>
            } />
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
            <Route exact path='/schedule' render={() =>
              userService.getUser() ?
                <SchedulesPage
                  addSchedule={this.addSchedule}
                // scores={this.state.scores}
                // handleUpdateScores={this.handleUpdateScores}
                />
                :
                <Redirect to='/login' />
            } />
          </Switch>

        </header>
        {/* <div className="body">
          <div>mySchedule</div>
        </div> */}
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

export default App
