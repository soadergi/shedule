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

const initialState = [[],[],[],[],[],[],[]];

var IncomeDataParser = () => {
  let weekDays = ['mo','tu','we','th','fr','sa','su'];
  for (let day in IncomeData) {
    IncomeData[day].forEach((item, i, arr)=>{
      for (let key in item){
        var bt;
        var interval;
        var keyValueInHours = (Math.round(item[key]/60));
        if (key === 'bt') {
          bt = keyValueInHours
        } else {
          interval = keyValueInHours - bt;
          for (let i = 0; i<interval; i++) {
            initialState[weekDays.indexOf(day)][bt] = 1;
            bt++;
          }
        }
      }
    })
  }
};

IncomeDataParser();

export default initialState;
