import { UNSELECT_ALL_DAY, SELECT_ALL_DAY, UNSELECT_HOUR, SELECT_HOUR, UNSELECT_ALL} from '../constants/index'

export function onClear() {
  return{
    type: UNSELECT_ALL
  }
}

export function onSelectHour(e) {
  return {
    type: SELECT_HOUR,
    payload: [
      parseInt(e.target.parentNode.getAttribute('data-index'), 10),
      parseInt(e.target.className, 10)
    ]
  }
}

export function onUnselectHour(e) {
  return {
    type: UNSELECT_HOUR,
    payload: [
      parseInt(e.target.parentNode.getAttribute('data-index'), 10),
      parseInt(e.target.className, 10)
    ]
  }
}

export function onUnselectAllDay(e) {
  return {
    type: UNSELECT_ALL_DAY,
    payload: [
      parseInt(e.target.parentNode.getAttribute('data-index'), 10)
    ]
  }
}

export function onSelectAllDay(e) {
  return {
    type: SELECT_ALL_DAY,
    payload: [
      parseInt(e.target.parentNode.getAttribute('data-index'), 10)
    ]
  }
}
