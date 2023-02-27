import { Report } from "../../types/Report";

export const getTestData = () => {
  const randomIntFromInterval = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const coordinateVariance = () =>
    [-1, 1][randomIntFromInterval(0, 1)] *
    Math.random().valueOf() *
    0.001 *
    randomIntFromInterval(1, 10);

  const reportData: Report[] = [
    {
      dateIncident: "2023-01-05T23:28:57.517Z",
      timeFrom: "2023-01-05T23:28:57.517Z",
      timeTo: "2023-01-06T01:28:57.517Z",
      category: "USAGE_CONFIRMED",
      description: "Hello how are you I am doing great. Hope you are fine",
      location: {
        title:
          "Sacred Heart Higher Secondary School, Q256+V6Q, Nalloornad, Kerala, Dwaraka - Kammana, Pulikkad, Mananthavady, Wayanad, Kerala, 670645, India",
        id: "sadsadsafaas",
        lat: 8.504957859331336,
        lon: 76.95102890905878,
      },
      status: "IN-PROGRESS",
      studentId: null,
      facialData: null,
    },
    {
      dateIncident: "2023-01-05T23:28:57.517Z",
      timeFrom: "2023-01-05T23:28:57.517Z",
      timeTo: "2023-01-06T01:28:57.517Z",
      category: "USAGE_CONFIRMED",
      description: "I am mak, you are doing great. Hope you are fine",
      location: {
        title: "Pattom, Thiruvananthapuram, Kerala, 695001, India",
        id: "sadsadsafaas",
        lat: 8.52126111750968,
        lon: 76.94227304347335,
      },
      studentId: null,
      facialData: null,
      status: "NEW",
    },
    {
      dateIncident: "2023-01-05T23:28:57.517Z",
      timeFrom: "2023-01-05T23:28:57.517Z",
      timeTo: "2023-01-06T01:28:57.517Z",
      category: "USAGE_CONFIRMED",
      description: "I am mak, you are doing great. Hope you are fine",
      location: {
        title: "Pattom, Thiruvananthapuram, Kerala, 695001, India",
        id: "sadsadsafaas",
        lat: 8.54793132911216,
        lon: 76.91644679508131,
      },
      status: "DONE",
      studentId: null,
      facialData: null,
    },
    {
      dateIncident: "2023-01-05T23:28:57.517Z",
      timeFrom: "2023-01-05T23:28:57.517Z",
      timeTo: "2023-01-06T01:28:57.517Z",
      category: "USAGE_CONFIRMED",
      description: "I am mak, you are doing great. Hope you are fine",
      location: {
        title: "Pattom, Thiruvananthapuram, Kerala, 695001, India",
        id: "58438487",
        lat: 8.54793132911216,
        lon: 76.91644679508131,
      },
      status: "DONE",
      studentId: null,
      facialData: null,
    },
  ];

  const testData = [...reportData];

  reportData.forEach((e) => {
    for (let j = 0; j < randomIntFromInterval(10, 50); j++)
      testData.push({
        ...reportData[randomIntFromInterval(0, 3)],
        location: {
          id: "",
          title: "",
          lat: e.location.lat + coordinateVariance(),
          lon: e.location.lon + coordinateVariance(),
        },
      });
  });

  return testData;
};
