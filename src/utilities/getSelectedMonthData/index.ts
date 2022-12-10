import getValueByKey from "../getValueByKey";
import { monthsByNumberAndOrderedDays } from "../historicalData.ts";

// TODO: Complete this function and serve data to allGoalsList and allThoughtsList
export const getSelectedMonthDataByYearMonthNum = (
  year: number,
  monthNum: number
) => {
  const yearData = getValueByKey(year.toString());
  const dayDataByMonth = monthsByNumberAndOrderedDays;

  const monthNumAndDayIds = Object.entries(yearData);
  monthNumAndDayIds.forEach(([monthNum, dayIds]) => {
    const sortedMonthDaysByDay = sortMonthDaysByDay(Object.entries(dayIds));
    dayDataByMonth[monthNum] = sortedMonthDaysByDay.map(([_, id]) =>
      getValueByKey(id)
    );
  });
  return dayDataByMonth;
};

function sortMonthDaysByDay(dayNumberAndId) {
  const sortedMonthDaysByDay = dayNumberAndId.sort(
    (a, b) => parseInt(a[0]) - parseInt(b[0])
  );
  return sortedMonthDaysByDay;
}
