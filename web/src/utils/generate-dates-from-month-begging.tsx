import dayjs from "dayjs";

export function GenerateDatesFromMonthBeginning() {
  const firstDayOfTheMonth = dayjs().startOf("month");
  const lastDayOfTheMonth = dayjs().endOf("month");

  const dates = [];
  let compareDate = firstDayOfTheMonth;

  while (compareDate.isBefore(lastDayOfTheMonth)) {
    dates.push(compareDate.toDate());
    compareDate = compareDate.add(1, "day");
  }
  dates.push(lastDayOfTheMonth.toDate());

  return dates;
}


// export function GenerateDatesFromYearBegging() {
//   const firstDayOfTheYear = dayjs().startOf("year");
//   const today = new Date();

//   const dates = [];
//   let compareDate = firstDayOfTheYear;

//   while (compareDate.isBefore(today)) {
//     dates.push(compareDate.toDate());
//     compareDate = compareDate.add(1, "day");
//   }

//   return dates;
// }