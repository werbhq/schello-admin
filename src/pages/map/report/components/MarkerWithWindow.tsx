import { Chip, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { STATUS_COLOR } from "../../../drugReports/constant";

// Use all components ending with F (its a fix for react 18+)
// Docs: https://react-google-maps-api-docs.netlify.app/
import { InfoWindowF, MarkerF } from "@react-google-maps/api";
import { getStatusMarkerIcon } from "../constants";
import { Button, useRedirect } from "react-admin";
import { MAPPING } from "../../../../provider/mapping";
import { ReportMap } from "../helpers/parseReport";

const headerStyle = { fontSize: "0.90rem", fontWeight: "bold" };
const subTitleStyle = { fontSize: "0.75rem" };

const MarkerWithWindow = ({ data }: { data: ReportMap }) => {
  const { reports, location } = data;
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const redirect = useRedirect();
  const report = reports[0];
  const isSingleReport = reports.length === 1;

  const incidentDates = reports.map((e) => new Date(e.dateIncident).valueOf());
  const dateRangeStr = [
    new Date(Math.min(...incidentDates)).toLocaleDateString("en-GB"),
    "->",
    new Date(Math.max(...incidentDates)).toLocaleDateString("en-GB"),
  ].join(" ");

  return (
    <MarkerF
      position={data.location}
      onClick={() => setShowInfoWindow(true)}
      icon={getStatusMarkerIcon(isSingleReport ? report.status : "MULTIPLE")}
    >
      {showInfoWindow && (
        <InfoWindowF
          position={location}
          onCloseClick={() => setShowInfoWindow(false)}
        >
          {isSingleReport ? (
            <Stack spacing={1}>
              <Stack alignItems="flex-start">
                <Typography sx={headerStyle}>Incident Date</Typography>
                <Typography sx={subTitleStyle}>
                  {new Date(report.dateIncident).toLocaleDateString("en-GB")}
                </Typography>
              </Stack>

              <Stack alignItems="flex-start">
                <Typography sx={headerStyle}>Status</Typography>
                <Chip
                  label={report.status}
                  color={STATUS_COLOR.get(report.status)}
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
                  onClick={() =>
                    redirect("show", MAPPING.DRUG_REPORTS, report.id)
                  }
                />
              </Stack>
            </Stack>
          ) : (
            <Stack spacing={1}>
              <Stack alignItems="flex-start">
                <Typography sx={headerStyle}>Reports</Typography>
                <Typography sx={subTitleStyle}>{reports.length}</Typography>
              </Stack>

              <Stack alignItems="flex-start">
                <Typography sx={headerStyle}>Date Range</Typography>
                <Typography sx={subTitleStyle}>{dateRangeStr}</Typography>
              </Stack>

              <Stack paddingTop={1}>
                <Button
                  label="More Info"
                  size="small"
                  variant="outlined"
                  onClick={() => {
                    const query = JSON.stringify({
                      location: { id: report.location.id },
                    });
                    const filter = encodeURI(`filter=${query}`);
                    redirect(`/${MAPPING.DRUG_REPORTS}?${filter}`);
                  }}
                />
              </Stack>
            </Stack>
          )}
        </InfoWindowF>
      )}
    </MarkerF>
  );
};

export default MarkerWithWindow;
