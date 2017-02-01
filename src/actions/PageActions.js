export function onClear() {
  return{
    type: 'UNSELECT_ALL'
  }
}

export function onSelectHour(e) {
  return {
    type: 'SELECT_HOUR',
    payload: [
      e.target.parentNode.getAttribute('data-index'),
      parseInt(e.target.className)
    ]
  }
}

export function onUnselectHour(e) {
  return {
    type: 'UNSELECT_HOUR',
    payload: [
      e.target.parentNode.getAttribute('data-index'),
      parseInt(e.target.className)
    ]
  }
}

export function onUnselectAllDay(e) {
  return {
    type: 'UNSELECT_ALL_DAY',
    payload: [
      e.target.parentNode.getAttribute('data-index')
    ]
  }
}

export function onSelectAllDay(e) {
  return {
    type: 'SELECT_ALL_DAY',
    payload: [
      e.target.parentNode.getAttribute('data-index')
    ]
  }
}
