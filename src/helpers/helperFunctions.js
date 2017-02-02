export function calculateDependentSelections(newHoursState, oldDependentState) {
  let dependentSelections = [...oldDependentState];

  newHoursState.forEach((hoursRow, day) => {
    if (hoursRow.some( hour => {return !!hour})) {
      dependentSelections[day][0] = 1;
    } else {
      dependentSelections[day][0] = 0;
    }

    let IsAllDaySelected = true;

    for (let i = 0; i<24; i++) {
      if (hoursRow[i] === 0 || hoursRow[i] === undefined) {
        IsAllDaySelected = false
      }
    }

    if (IsAllDaySelected) {
      dependentSelections[day][1] = 1;
    } else {
      dependentSelections[day][1] = 0;
    }

    for (let i=0; i<24; i++) {
      if (!hoursRow[i]) { hoursRow[i]=0 }
    }
  })
  return dependentSelections;
}

export function incomeDataParser(data) {
  const initialState = [ [[],[],[],[],[],[],[]], [[],[],[],[],[],[],[]] ];
  let weekDays = ['mo','tu','we','th','fr','sa','su'];

  for (let day in data) {
    data[day].forEach((item, i, arr)=>{
      for (let key in item){
        var bt;
        var interval;
        var keyValueInHours = (Math.round(item[key]/60));
        if (key === 'bt') {
          bt = keyValueInHours
        } else {
          interval = keyValueInHours - bt;
          for (let i = 0; i<interval; i++) {
            initialState[0][weekDays.indexOf(day)][bt] = 1;
            bt++;
          }
        }
      }
    })
  }
  return initialState;
}
