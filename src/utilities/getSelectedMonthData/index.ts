import getValueByKey from "../getValueByKey";

// TODO: Write a test to verify that this works
export const getDataByYearMonthNum = (year: number, monthNum: number) => {
  const yearData = getValueByKey(`${year}OrderedDayIdsByDate`);
  const orderedDayIdsByDate = yearData[monthNum];
  const selectedMonthDayData = orderedDayIdsByDate.map((id: string) =>
    getValueByKey(id)
  );
  return selectedMonthDayData;
};
