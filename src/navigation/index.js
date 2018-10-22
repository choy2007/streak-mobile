import React, { Component } from "react";
import { connect } from "react-redux";
import { addNavigationHelpers } from "react-navigation";
import NavigationStack from "./navigationStack";
import {
  createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';


class AppNavigation extends Component {
  render() {
    const { nav, dispatch } = this.props;
    const addListener = createReduxBoundAddListener("root");
    return (
      <NavigationStack
        navigation={addNavigationHelpers({ dispatch, state: nav, addListener })}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nav: state.nav
  };
};

export default connect(mapStateToProps)(AppNavigation);
