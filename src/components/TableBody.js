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

    let clickedDayArr = e.target.parentNode.getAttribute('data-index');
    let clickedHour = parseInt(e.target.getAttribute('class'));

    if (e.target.classList.contains('all')) {
  		if (this.props.tableState[1][clickedDayArr][1]) {
  			this.props.onUnselectAllDay(e);
  		} else {
  			this.props.onSelectAllDay(e);
  		}
  		return;
  	}

    if (this.props.tableState[0][clickedDayArr][clickedHour]) {
      this.props.onUnselectHour(e);
    } else {
        this.props.onSelectHour(e);
      }
  }

  handleMouseDown = (e) => {
    e.preventDefault();

    const selectOnMove = (e) => {
      let clickedDayArr = e.target.parentNode.getAttribute('data-index');
      let clickedHour = parseInt(e.target.getAttribute('class'));
      if (!this.props.tableState[0][clickedDayArr][clickedHour]) {
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
      <tbody
        onClick={this.handleClick}
        onMouseDown={this.handleMouseDown}
        ref={(tbody) => {this.tbody = tbody}}>
          {this.props.tableState[0].map((hours, day) => {
            return (
              <tr key={''+day} data-index={day}>
                <td
                  className={
                    this.props.tableState[1][day][0]?' active':''
                  }>
                  {days[day]}
                </td>
                <td
                  className={
                    (this.props.tableState[1][day][1])?'all selected':'all'
                  }>
                </td>
                {renderHours(hours)}
              </tr>
            )
          })}
      </tbody>
    )
  }
}

export default TableBody;
