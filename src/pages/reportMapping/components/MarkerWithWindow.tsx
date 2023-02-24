import { Card, Chip, Stack, Typography } from "@mui/material";
import { InfoWindowF, MarkerF } from "@react-google-maps/api";
import { useState } from "react";
import { Report } from "../../../types/Report";

type ReportCustom = Omit<Report, "location"> & { location: google.maps.LatLng };

const MarkerWithWindow = ({ data }: { data: ReportCustom }) => {
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  return (
    <MarkerF position={data.location} onClick={() => setShowInfoWindow(true)}>
      {showInfoWindow && (
        <InfoWindowF
          position={data.location}
          onCloseClick={() => setShowInfoWindow(false)}
        >
          <Card>
            <Stack spacing={2}>
              <Stack alignItems="center">
                <Typography fontWeight="bold">Incident Date</Typography>
                <Typography>
                  {new Date(data.dateIncident).toLocaleDateString("en-GB")}
                </Typography>
              </Stack>
              <Chip label={data.status} variant="outlined" />
            </Stack>
          </Card>
        </InfoWindowF>
      )}
    </MarkerF>
  );
};

export default MarkerWithWindow;
