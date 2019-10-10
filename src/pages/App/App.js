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

  handleAddSchedule = async newScheduleData => {
    // console.log(newScheduleData);
    const newSchedule = await scheduleAPI.create(newScheduleData);
    this.setState(
      state => ({
        schedule: [...state.schedule, newSchedule]
      }),
      () => this.props.history.push("/schedule")
    );
  };
  // handleAddSchedule = state => {
  //   console.log(state);
  //   this.setState({
  //     schedule: [...this.state.schedule, state]
  //   });
  // };

  /*--- DELETE FUNCTION ---*/

  handleDeleteSchedule = async id => {
    await scheduleAPI.deleteOne(id);
    this.setState(
      state => ({
        // Yay, filter returns a NEW array
        schedule: state.schedule.filter(s => s._id !== id)
      }),
      () => this.props.history.push("/schedule")
    );
  };

  // TODO_LIST
  // deleteItem = id => {
  //   console.log(id);
  //   // first we copy the state and modify it
  //   let newSchedule = this.state.schedule.filter(
  //     item => this.state.schedule[id] !== item
  //   );
  //   // set the state
  //   this.setState({
  //     schedule: newSchedule
  //   });
  // };

  /*--- UPDATE FUNCTION ---*/

  handleUpdateSchedule = async updatedSchedData => {
    const updatedSchedule = await scheduleAPI.update(updatedSchedData);
    const newScheduleArray = this.state.schedule.map(p =>
      p._id === updatedSchedule._id ? updatedSchedule : p
    );
    this.setState(
      { Schedule: newScheduleArray },
      // Using cb to wait for state to update before rerouting
      () => this.props.history.push("/schedule")
    );
  };

  // updateSchedule = id => {
  //   console.log(id);
  //   // first we copy the state and modify it
  //   let newSchedule = this.state.schedule.filter(
  //     item => this.state.schedule[id] !== item
  //   );
  //   // set the state
  //   this.setState({
  //     schedule: newSchedule
  //   });
  // };

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
                    schedule={this.state.schedule}
                    handleAddSchedule={this.handleAddSchedule}
                    handleUpdateSchedule={this.handleUpdateSchedule}
                    handleDeleteSchedule={this.handleDeleteSchedule}
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
