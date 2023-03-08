import { Report } from "types/Report";

export type ReportMap = {
  reports: Report[];
  location: google.maps.LatLng;
};

export const parseReports = (reports: Report[]) => {
  const data: {
    [coordinates: string]: ReportMap;
  } = {};

  reports.forEach((e) => {
    const index = `${e.location.lat}-${e.location.lon}`;
    if (!data[index])
      data[index] = {
        reports: [e],
        location: new google.maps.LatLng(e.location.lat, e.location.lon),
      };
    else {
      data[index].reports.push(e);
    }
  });

  return Object.values(data);
};
