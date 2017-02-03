import React, { Component } from 'react';

class TableBody extends Component {
  componentDidMount() {
    var isMouseDown = false;

    const handleClick = (e) => {
      if (e.target.innerHTML) {
        return;
      }
      let clickedDayArr = parseInt(e.target.parentNode.getAttribute('data-index'), 10);
      let clickedHour = parseInt(e.target.getAttribute('class'), 10);
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
    };

    const handleMouseUpOrDown = (e) => {
      e.preventDefault();
      isMouseDown = !isMouseDown;
      };

    const selectOnMove = (e) => {
      if (!isMouseDown) return;
      let clickedDayArr = parseInt(e.target.parentNode.getAttribute('data-index'), 10);
      let clickedHour = parseInt(e.target.getAttribute('class'), 10);
      if (!this.props.tableState[0][clickedDayArr][clickedHour]) {
        this.props.onSelectHour(e);
      } else {
        return
      }
    }

    this.tbody.addEventListener('click', handleClick);
    this.tbody.addEventListener('mousedown', handleMouseUpOrDown);
    this.tbody.addEventListener('mousemove', selectOnMove);
    this.tbody.addEventListener('mouseup', handleMouseUpOrDown);
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
        onMouseDown={this.handleMouseDown}
        ref={tbody => this.tbody = tbody}>
          {this.props.tableState[0].map((hours, day) => {
            return (
              <tr key={day} data-index={day}>
                <td
                  className={
                    this.props.tableState[1][day][0]?' active':''
                  }>
                  {days[day]}
                </td>
                <td
                  className={
                    this.props.tableState[1][day][1]?'all selected':'all'
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
