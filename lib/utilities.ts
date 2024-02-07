import { format } from "date-fns";

export const calculateIncrementalData = (cumulativeData: string[]) => {
  const incrementalData = [];
  for (let i = 1; i < cumulativeData.length; i++) {
    const difference =
      Number(cumulativeData[i]) - Number(cumulativeData[i - 1]);
    incrementalData.push(difference.toString());
  }
  return incrementalData;
};

export const formatTimeEntries = (timeEntries: Date[]) => {
  return timeEntries
    .slice(1)
    .map((time) => format(new Date(time), "yyyy-MM-dd HH:MM:SS"));
};
