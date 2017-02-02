import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import TableHead from '../components/TableHead'
import TableBody from '../components/TableBody'
import Buttons from '../components/Buttons'
import * as pageActions from '../actions/PageActions'
import { bindActionCreators } from 'redux'

class App extends Component {
  render() {
    const {onClear, onSelectHour, onUnselectHour, onSelectAllDay, onUnselectAllDay} = this.props.pageActions;
    return (
      <div>
        <h3>set shedule</h3>
        <table>
          <TableHead />
          <TableBody
            tableState={this.props.sheduleStore}
            onSelectHour={onSelectHour}
            onUnselectHour={onUnselectHour}
            onSelectAllDay={onSelectAllDay}
            onUnselectAllDay={onUnselectAllDay}
          />
        </table>
        <Buttons
          onClear={onClear}
          toCheckIfSelected={this.props.sheduleStore[1]}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { sheduleStore: state }
}

function mapDispatchToProps(dispatch) {
  return { pageActions: bindActionCreators(pageActions, dispatch) }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(App);
