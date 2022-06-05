const getDateFormat = (day) => {
  const dateParsed = Date.parse(day);
  const newDate = new Date(dateParsed);
  const dateFormatted = newDate.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  return dateFormatted;
};

export default getDateFormat;
