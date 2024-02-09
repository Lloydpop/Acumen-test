import { DateTime, Settings } from "luxon";
Settings.defaultLocale = "en";

export const formatDate = (date: any) => {
  return DateTime.fromJSDate(new Date(date)).toFormat("dd/MM/yyyy - hh:mma");
};
