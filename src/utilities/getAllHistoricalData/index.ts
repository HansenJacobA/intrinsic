// import { getCurrentYear } from "../getCurrentYear";
// import getValueByKey from "../getValueByKey";
// import { monthsByNumberAndOrderedDays } from "../historicalData.ts";

// export const getAllHistoricalData = () => {
//   const history = getValueByKey(getCurrentYear());
//   const dayDataByMonth = monthsByNumberAndOrderedDays;
//   const monthNumAndDayIds = Object.entries(history);
//   monthNumAndDayIds.forEach(([monthNum, dayIds]) => {
//     const sortedMonthDaysByDay = sortMonthDaysByDay(Object.entries(dayIds));
//     dayDataByMonth[monthNum] = sortedMonthDaysByDay.map(([_, id]) =>
//       getValueByKey(id)
//     );
//   });
//   return dayDataByMonth;
// };

// function sortMonthDaysByDay(dayNumberAndId) {
//   const sortedMonthDaysByDay = dayNumberAndId.sort(
//     (a, b) => parseInt(a[0]) - parseInt(b[0])
//   );
//   return sortedMonthDaysByDay;
// }
