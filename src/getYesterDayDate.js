const getYesterDayDate = (date = new Date()) => {
  date.setDate(date.getDate() - 1);

  return date.toISOString().split("T")[0];
};

export default getYesterDayDate;
