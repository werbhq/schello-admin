import { Report } from "types/Report";

export const libraries: (
  | "places"
  | "visualization"
  | "geometry"
  | "drawing"
  | "localContext"
)[] = ["places", "visualization", "geometry"];

export const getTestData = () => {
  const randomIntFromInterval = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const coordinateVariance = () =>
    [-1, 1][randomIntFromInterval(0, 1)] *
    Math.random().valueOf() *
    0.001 *
    randomIntFromInterval(1, 10);

  const common = {
    id: "",
    dateIncident: "2023-01-05T23:28:57.517Z",
    timeFrom: "2023-01-05T23:28:57.517Z",
    timeTo: "2023-01-06T01:28:57.517Z",
    description: "Hello how are you I am doing great. Hope you are fine",
    studentId: null,
    facialData: null,
    wantedPersonId: null,
    tenant: "",
    student: {
      name: "",
      class: "",
    },
    studentIds: [],
    studentConfirmed: "",
    ip: "",
  };

  const reportData: Report[] = [
    {
      ...common,
      category: "USAGE_CONFIRMED",
      status: "IN-PROGRESS",
      location: {
        title:
          "Sacred Heart Higher Secondary School, Q256+V6Q, Nalloornad, Kerala, Dwaraka - Kammana, Pulikkad, Mananthavady, Wayanad, Kerala, 670645, India",
        id: "",
        lat: 8.504957859331336,
        lon: 76.95102890905878,
      },
    },
    {
      ...common,
      category: "USAGE_CONFIRMED",
      status: "NEW",
      location: {
        title: "Pattom, Thiruvananthapuram, Kerala, 695001, India",
        id: "",
        lat: 8.52126111750968,
        lon: 76.94227304347335,
      },
    },
    {
      ...common,
      category: "USAGE_CONFIRMED",
      status: "DONE",
      description: "I am mak, you are doing great. Hope you are fine",
      location: {
        title: "Pattom, Thiruvananthapuram, Kerala, 695001, India",
        id: "",
        lat: 8.54793132911216,
        lon: 76.91644679508131,
      },
    },
    {
      ...common,
      category: "USAGE_CONFIRMED",
      status: "DONE",
      location: {
        title: "Pattom, Thiruvananthapuram, Kerala, 695001, India",
        id: "",
        lat: 8.54793132911216,
        lon: 76.91644679508131,
      },
    },
  ];

  const data = [...reportData];

  reportData.forEach((e, index) => {
    for (let j = 0; j < randomIntFromInterval(10, 50); j++)
      data.push({
        ...reportData[randomIntFromInterval(0, 3)],
        location: {
          id: `${index + 4 + j}`,
          title: "",
          lat: e.location.lat + coordinateVariance(),
          lon: e.location.lon + coordinateVariance(),
        },
      });
  });

  return data;
};

type STATUS = Report["status"] | "MULTIPLE";

export const getStatusMarkerIcon = (status: STATUS) => {
  const STATUS_COLOR = new Map<STATUS, string>([
    ["NEW", "#03a9f4"],
    ["IN-PROGRESS", "#ffc400"],
    ["DONE", "#4caf50"],
    ["SPAM", "#ef5350"],
    ["MULTIPLE", "#d500f9"],
  ]);

  const pinSVGHole =
    "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z";
  const labelOriginHole = new google.maps.Point(12, 15);

  return {
    path: pinSVGHole,
    labelOrigin: labelOriginHole,
    anchor: new google.maps.Point(12, 17),
    fillOpacity: 2,
    fillColor: STATUS_COLOR.get(status) ?? "black",
    strokeWeight: 0.3,
    strokeColor: "black",
    scale: 1.5,
  };
};
