import { differenceInDays, format, parse } from "date-fns";

const convertDate = (date: string) => {
  const convertedDate = parse(date, "yyyy-mm-dd", new Date());
  const formattedDate = format(convertedDate, "MM-dd-yyy");

  return formattedDate;
};

const calculateNumDays = (lastPlanted: string) => {
  const date = parse(lastPlanted, "yyyy-mm-dd", new Date());
  const dateStr = format(date, "mm-dd-yyyy");
  const today = new Date();
  const daysBetween = Math.abs(differenceInDays(new Date(dateStr), today));
  console.log("Days since you last planted this tree: ", daysBetween);
  return daysBetween;
};

export const DataUtils = {
  convertDate,
  calculateNumDays,
};
