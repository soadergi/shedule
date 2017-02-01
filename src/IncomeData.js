var IncomeData =
{
  "mo": [{"bt": 240,"et": 779}],
  "tu": [],
  "we": [],
  "th": [{"bt": 240,"et": 779},{"bt": 1140,"et": 1319}],
  "fr": [{"bt": 660,"et": 1019}],
  "sa": [{"bt": 0,"et": 1439}],
  "su": []
}

const initialState = [ [[],[],[],[],[],[],[]], [[],[],[],[],[],[],[]] ];

const IncomeDataParser = (data) => {
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
  initialState[0].forEach((hoursRow, day) => {
    if (hoursRow.some((hour) => {
      return !!hour
    })) {
      initialState[1][day][0] = 1;
    }
    if (hoursRow.length >= 24 && hoursRow.every((hour) => {
      return !!hour
    })) {
      initialState[1][day][1] = 1;
    }
  })
};

IncomeDataParser(IncomeData);

export default initialState;
