import getValueByKey from "../getValueByKey";

export const getAllDaysOfMonthData = (month) => {
  const history = getValueByKey("history");
  const daysOfMonthAndIds = history[month];
  const dayIdsOrderedByDate = Object.entries(daysOfMonthAndIds).sort((a, b) => {
    return parseInt(a[0]) - parseInt(b[0]);
  });
  const allDaysOfMonthData = dayIdsOrderedByDate.map(function getDayDataById(
    dayAndId
  ) {
    return getValueByKey(dayAndId[1]);
  });
  return allDaysOfMonthData;
};
