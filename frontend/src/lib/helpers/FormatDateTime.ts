export const formatDateTime = (date: Date) => {
  // const dateString = "2023-04-23T10:30";
  // const date = new Date(dateString);
  const options = { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false };
  const formattedDate = date.toLocaleString("ja", options).replace(/[-/]/g, "-").replace(",", "").replace(" ", "T");
  return formattedDate;
};
