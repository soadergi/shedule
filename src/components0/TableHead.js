import React from 'react';

function TableHead() {
  return (
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
  )
}

export default TableHead;
