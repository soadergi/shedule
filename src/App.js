import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.clear = this.clear.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  clear() {
    let allDay = document.getElementsByClassName('all');
    allDay.forEach = [].forEach;
    allDay.forEach((item, i, arr) => {
      item.classList.remove('selected');
    });
    this.props.onClear();
  }

  handleClick(e) {
    if (e.target.innerHTML) {
  		return;
  	}

    if (e.target.classList.contains('all')) {
  		if (e.target.classList.contains('selected')) {
  			this.props.onUnselectAllDay(e);
  		} else {
  			this.props.onSelectAllDay(e);
  		}
  		e.target.classList.toggle('selected');
  		return;
  	}

    let isSelected = e.target.classList.contains('active');
    if (isSelected) {
      e.target.parentNode.getElementsByClassName('all')[0].classList.remove('selected');
      this.props.onUnselectHour(e);
    } else {
      this.props.onSelectHour(e);
    }
  }

  handleMouseDown(e) {
    var self = this;
    function selectOnMove (e) {
      if (!e.target.classList.contains('active')) {
        self.props.onSelectHour(e);
      } else {
        return
      }
    }

    this.tbody.addEventListener('mousemove', selectOnMove);
  	this.tbody.addEventListener('mouseup', () => {
  		this.tbody.removeEventListener('mousemove', selectOnMove);
  		return;
  	});
  }

  render() {
    let days = ['MO','TU','WE','TH','FR','SA','SU'];
    function renderHours(hours) {
      let hoursRow = [];
      for (let i=0; i<24; i++) {
        hoursRow.push(
          <td key={''+i} className={''+i+(hours[i] ? ' active' : '')}></td>
        )
      }
      return hoursRow;
    }
    return (
      <div>
      <h3>set shedule</h3>
      <table>
        <thead>
          <tr>
              <th></th>
              <th>all day</th>
              <th colSpan="3">00:00</th>
              <th colSpan="3">03:00</th>
              <th colSpan="3">06:00</th>
              <th colSpan="3">09:00</th>
              <th colSpan="3">12:00</th>
              <th colSpan="3">15:00</th>
              <th colSpan="3">18:00</th>
              <th colSpan="3">21:00</th>
          </tr>
          <tr>
              <th></th>
              <th></th>
              <th colSpan="3"></th>
              <th colSpan="3"></th>
              <th colSpan="3"></th>
              <th colSpan="3"></th>
              <th colSpan="3"></th>
              <th colSpan="3"></th>
              <th colSpan="3"></th>
              <th colSpan="3"></th>
          </tr>
        </thead>
        <tbody onClick={this.handleClick} onMouseDown={this.handleMouseDown} ref={(tbody) => {this.tbody = tbody}}>
          {this.props.appStore.map((hours, day) => {
            return (
              <tr key={''+day} data-index={day}>
                <td className={(hours.some((hour) => {return !!hour}))?' active':''}>{days[day]}</td><td className='all'></td>
                {renderHours(hours)}
              </tr>
            )
          })}
        </tbody>
      </table>
      <button>Save Changes</button>
      <button onClick={this.clear}>Clear</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    appStore: state
  }),
  dispatch => ({
    onClear: () => {
      dispatch({ type: 'UNSELECT_ALL' })
    },

    onSelectHour: (e) => {
      dispatch({ type: 'SELECT_HOUR', day: [e.target.parentNode.getAttribute('data-index'), parseInt(e.target.className)]});
    },

    onUnselectHour: (e) => {
      dispatch({ type: 'UNSELECT_HOUR', day: [e.target.parentNode.getAttribute('data-index'), parseInt(e.target.className)]});
    },

    onUnselectAllDay: (e) => {
      dispatch({ type: 'UNSELECT_ALL_DAY', day: [e.target.parentNode.getAttribute('data-index')]});
    },

    onSelectAllDay: (e) => {
      dispatch({ type: 'SELECT_ALL_DAY', day: [e.target.parentNode.getAttribute('data-index')]});
    }
  })
)(App);
