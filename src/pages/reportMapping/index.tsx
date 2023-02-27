import { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";

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
import { getTestData } from "./constants";

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
  }, []);

  if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;

  if (!(isLoaded && isDataLoaded)) {
    return <CircularProgress sx={{ margin: "20px" }} />;
  }

  return (
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
