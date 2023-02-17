/*global google*/
import React from "react";
import {
  GoogleMap,
  HeatmapLayerF,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
// Use all components ending with F (its a fix for react 18+)
// Docs: https://react-google-maps-api-docs.netlify.app/

import { Card, CardHeader, CircularProgress } from "@mui/material";

// TODO: REMOVE UNWANTED LIBS
const libraries = [
  "visualization",
  "drawing",
  "places",
  "geometry",
  "localContext",
];

const mapStyles = {
  height: "80vh",
  width: "100%",
};

function MapContainer() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries,
  });

  const defaultCenter = {
    lat: 37.782,
    lng: -122.445,
  };

  const [data, setData] = React.useState([]);
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsDataLoaded(false);
    // TODO: Get data from firebase and map them into points
    // Fetching data similar
    const test_data = [
      [37.782, -122.445],
      [37.782, -122.443],
      [37.782, -122.441],
      [37.782, -122.437],
      [37.782, -122.437],
    ];

    // Increasing test data
    for (let i = 0; i < 400; i++) {
      test_data.push([
        test_data[0][0] + Math.random().valueOf(),
        test_data[4][1] - Math.random().valueOf(),
      ]);
    }

    // This creates a fake api call of 2s (2000)
    new Promise((resolve) => setTimeout(resolve, 2000)).then((e) => {
      setData(test_data);
      setIsDataLoaded(true);
    });
  }, [setData, setIsDataLoaded]);

  const RenderMap = () => {
    return (
      <GoogleMap mapContainerStyle={mapStyles} zoom={10} center={defaultCenter}>
        <HeatmapLayerF
          data={data.map((e) => new google.maps.LatLng(e[0], e[1]))}
        />
        <MarkerF label="Report 1" position={{ lat: 37.782, lng: -122.445 }} />
      </GoogleMap>
    );
  };

  if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;

  return isLoaded && isDataLoaded ? (
    <RenderMap />
  ) : (
    <CircularProgress sx={{ margin: "20px" }} />
  );
}

const CrimeMapping = () => {
  return (
    <Card>
      <CardHeader title="Crime Mapping" />
      <MapContainer />
    </Card>
  );
};

export default CrimeMapping;
