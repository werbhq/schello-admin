import { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
// Use all components ending with F (its a fix for react 18+)
// Docs: https://react-google-maps-api-docs.netlify.app/

import {
  Card,
  CardHeader,
  CircularProgress,
  FormControlLabel,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import GoogleMapCustom from "./components/GoogleMapCustom";
import AuthenticatedExcise from "../../components/auth/AuthenticatedExcise";
import { Report } from "../../types/Report";

// TODO: REMOVE UNWANTED LIBS

const getTestData = () => {
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

function MapContainer() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY ?? "",
    libraries: ["places", "visualization", "geometry"],
  });

  const [data, setData] = useState<Report[]>([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [hideMarkers, setHideMarkers] = useState(true);
  const [hideHeatMap, setHideHeatMap] = useState(false);

  useEffect(() => {
    setIsDataLoaded(false);
    // TODO: Get data from firebase and map them into points
    // Fetching data similar
    const fetch_data = getTestData();
    // This creates a fake api call of 2s (2000)
    new Promise((resolve) => setTimeout(resolve, 2000)).then((e) => {
      setData(fetch_data);
      setIsDataLoaded(true);
    });
  }, [setData, setIsDataLoaded]);

  if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;

  return isLoaded && isDataLoaded ? (
    <>
      <Stack direction="row" spacing={2}>
        <Typography style={{ margin: "12px" }}>
          Sample Based on {data.length} reports
        </Typography>

        <FormControlLabel
          control={
            <Switch
              checked={hideHeatMap}
              onChange={(e) => setHideHeatMap(e.target.checked)}
            />
          }
          label="Hide Heat Map"
        />
        <FormControlLabel
          control={<Switch checked={hideMarkers} />}
          onChange={(e, checked) => setHideMarkers(checked)}
          label="Hide Markers"
        />
      </Stack>

      <GoogleMapCustom
        data={data}
        hideHeatMap={hideHeatMap}
        hideMarker={hideMarkers}
      />
    </>
  ) : (
    <CircularProgress sx={{ margin: "20px" }} />
  );
}

const CrimeMapping = () => {
  return (
    <AuthenticatedExcise>
      <Card>
        <CardHeader title="Crime Mapping" />
        <MapContainer />
      </Card>
    </AuthenticatedExcise>
  );
};

export default CrimeMapping;