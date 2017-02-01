import React, { Component } from 'react';

class TableBody extends Component {
  clear = () => {
    let allDay = document.getElementsByClassName('all');
    allDay.forEach = [].forEach;
    allDay.forEach((item, i, arr) => {
      item.classList.remove('selected');
    });
    this.props.onClear();
  }

  handleClick = (e) => {
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

  handleMouseDown = (e) => {
    e.preventDefault();

    const selectOnMove = (e) => {
      if (!e.target.classList.contains('active')) {
        this.props.onSelectHour(e);
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
      <tbody onClick={this.handleClick} onMouseDown={this.handleMouseDown} ref={(tbody) => {this.tbody = tbody}}>
        {this.props.hoursData.map((hours, day) => {
          return (
            <tr key={''+day} data-index={day}>
              <td className={(hours.some((hour) => {return !!hour}))?' active':''}>{days[day]}</td><td className='all'></td>
              {renderHours(hours)}
            </tr>
          )
        })}
      </tbody>
    )
  }
}

export default TableBody;
