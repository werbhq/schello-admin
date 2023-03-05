import { Chip, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { Report } from "../../../../types/Report";
import { STATUS_COLOR } from "../../../drugReports/constant";

// Use all components ending with F (its a fix for react 18+)
// Docs: https://react-google-maps-api-docs.netlify.app/
import { InfoWindowF, MarkerF } from "@react-google-maps/api";
import { getStatusMarkerIcon } from "../constants";
import { Button, useRedirect } from "react-admin";
import { MAPPING } from "../../../../provider/mapping";

type ReportCustom = Omit<Report, "location"> & { location: google.maps.LatLng };

const headerStyle = { fontSize: "0.90rem", fontWeight: "bold" };
const subTitleStyle = { fontSize: "0.75rem" };

const MarkerWithWindow = ({ data }: { data: ReportCustom }) => {
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const redirect = useRedirect();
  return (
    <MarkerF
      position={data.location}
      onClick={() => setShowInfoWindow(true)}
      icon={getStatusMarkerIcon(data.status)}
    >
      {showInfoWindow && (
        <InfoWindowF
          position={data.location}
          onCloseClick={() => setShowInfoWindow(false)}
        >
          <Stack spacing={1}>
            <Stack alignItems="flex-start">
              <Typography sx={headerStyle}>Incident Date</Typography>
              <Typography sx={subTitleStyle}>
                {new Date(data.dateIncident).toLocaleDateString("en-GB")}
              </Typography>
            </Stack>

            <Stack alignItems="flex-start">
              <Typography sx={headerStyle}>Status</Typography>
              <Chip
                label={data.status}
                color={STATUS_COLOR.get(data.status)}
                size="small"
                sx={{ "	.MuiChip-label": subTitleStyle }}
                variant="outlined"
              />
            </Stack>

            <Stack paddingTop={1}>
              <Button
                label="More Info"
                size="small"
                variant="outlined"
                onClick={() => redirect("show", MAPPING.DRUG_REPORTS, data.id)}
              />
            </Stack>
          </Stack>
        </InfoWindowF>
      )}
    </MarkerF>
  );
};

export default MarkerWithWindow;
