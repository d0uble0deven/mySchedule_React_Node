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
import AddSchedulePage from "../AddSchedulePage/AddSchedulePage";
import EditSchedulePage from "../EditSchedulePage/EditSchedulePage";

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
    console.log(newScheduleData);
    const newSchedule = await scheduleAPI.create(newScheduleData);
    console.log(newSchedule);
    this.setState(
      state => ({
        schedule: [...state.schedule, newSchedule]
      }),
      () => this.props.history.push("/schedule")
    );
  };

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

  /*--- UPDATE FUNCTION ---*/

  handleUpdateSchedule = async updatedSchedData => {
    try {
      const updatedSchedule = await scheduleAPI.asyncUpdate(updatedSchedData);
      const newScheduleArray = this.state.schedule.map(s =>
        s._id === updatedSchedule._id ? updatedSchedule : s
      );
      this.setState(
        { Schedule: newScheduleArray },
        // Using cb to wait for state to update before rerouting
        () => this.props.history.push("/schedule")
      );
    } catch (error) {
      throw new Error(error);
    }
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
    console.log(schedules);
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
              path="/add"
              render={() => (
                <div>
                  <AddSchedulePage
                    handleAddSchedule={this.handleAddSchedule}
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
              path="/edit"
              render={({ history, location }) => (
                <EditSchedulePage
                  handleUpdateSchedule={this.handleUpdateSchedule}
                  location={location}
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
