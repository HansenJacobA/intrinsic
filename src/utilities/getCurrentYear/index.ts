export const getCurrentYear = (): string => {
  const currentDateTime = new Date().toLocaleString();
  const currentDate = currentDateTime.split(",")[0];
  const currentYear = currentDate.split("/")[2];
  return currentYear;
};
