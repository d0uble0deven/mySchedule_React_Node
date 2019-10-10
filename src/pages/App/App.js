import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import SchedulesPage from "../../components/SchedulesPage/SchedulesPage";
import SignupPage from "../SignupPage/SignupPage";
import userService from "../../utils/userService";
import "./App.css";
import NavBar from "../../components/NavBar/NavBar";
import LandingPage from "../LandingPage/LandingPage";
// import scheduleService from "../../utils/scheduleService";
import * as scheduleAPI from "../../services/schedules-api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schedule: [], // set to empty array so we dont get errors from our map methods
      user: userService.getUser()
    };
  }

  /*--- CREATE FUNCTION ---*/

  addSchedule = state => {
    console.log(state);
    this.setState({
      schedule: [...this.state.schedule, state]
    });
  };

  /*--- DELETE FUNCTION ---*/

  // TODO_LIST
  deleteItem = id => {
    console.log(id);
    // first we copy the state and modify it
    let newSchedule = this.state.schedule.filter(
      item => this.state.schedule[id] !== item
    );
    // set the state
    this.setState({
      schedule: newSchedule
    });
  };

  /*--- UPDATE FUNCTION ---*/

  updateSchedule = id => {
    console.log(id);
    // first we copy the state and modify it
    let newSchedule = this.state.schedule.filter(
      item => this.state.schedule[id] !== item
    );
    // set the state
    this.setState({
      schedule: newSchedule
    });
  };

  /*--- Callback Methods ---*/
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    console.log("i am App and i have mounted");
    // make your call to set our inital state to the data here after component has mounted
    const schedules = await scheduleAPI.getAll();
    this.setState({ schedules });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar user={this.state.user} logout={this.handleLogout} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div>
                  <LandingPage
                    handleLogout={this.handleLogout}
                    user={this.state.user}
                  />
                </div>
              )}
            />
            <Route
              exact
              path="/signup"
              render={({ history }) => (
                <SignupPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
            <Route
              exact
              path="/login"
              render={({ history }) => (
                <LoginPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                />
              )}
            />
            <Route
              exact
              path="/schedule"
              render={() =>
                userService.getUser() ? (
                  <SchedulesPage
                    addSchedule={this.addSchedule}
                    schedule={this.state.schedule}
                  />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
