import { calculateDependentSelections, incomeDataParser } from './helpers/helperFunctions'

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

const initialState = incomeDataParser(IncomeData);
calculateDependentSelections(initialState[0], initialState[1]);

export default initialState;
