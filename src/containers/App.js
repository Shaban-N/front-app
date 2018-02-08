import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import News from '../containers/News';
import Filter from '../containers/Filter.jsx';


export default class App extends Component {
  render() {
    const { counter, actions } = this.props;
    return (
      <div className="main-app-container">
        {/*<News />*/}
        <Filter />
      </div>
    );
  }
}
