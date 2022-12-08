import getValueByKey from "../getValueByKey";
import { historyDataContainers } from "../historicalData.ts";

export const getAllHistoricalData = () => {
  const history = getValueByKey("history");
  const dayDataByMonth = historyDataContainers;
  const monthNumAndDayIds = Object.entries(history);
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
