import { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import { Card, CardHeader, Stack, Typography } from "@mui/material";
import AuthenticatedExcise from "components/auth/AuthenticatedExcise";
import { Report } from "types/Report";
import PageLoader from "components/ui/PageLoader";
import { useGetList } from "react-admin";
import MAPPING from "provider/mapping";
import { SwitchCustom } from "components/ui/SwitchCustom";
import GoogleMapCustom from "pages/map/components/GoogleMapCustom";
import { libraries, getTestData } from "pages/map/constants";
import { parseReports } from "pages/map/helpers/parseReport";

function MapContainer() {
  const { isLoaded: isMapsLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY ?? "",
    libraries,
  });

  const { isLoading, data: liveReports } = useGetList<Report>(
    MAPPING.DRUG_REPORTS
  );

  const [data, setData] = useState<Report[]>([]);
  const [useLiveData, setUseLiveData] = useState(false);
  const [hideMarkers, setHideMarkers] = useState(true);
  const [hideHeatMap, setHideHeatMap] = useState(false);

  useEffect(() => {
    const fetchedData = useLiveData ? liveReports ?? [] : getTestData();
    setData(fetchedData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useLiveData]);

  if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;
  if (!(isMapsLoaded && !isLoading)) return <PageLoader loading={true} />;

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Typography style={{ margin: "12px" }}>
          Based on <span style={{ fontWeight: "bold" }}>{data.length}</span>
          {useLiveData ? " " : " Sample"} reports
        </Typography>

        <SwitchCustom
          label="Live Data"
          enable={useLiveData}
          setEnable={setUseLiveData}
        />
        <SwitchCustom
          label="Hide Heat Map"
          enable={hideHeatMap}
          setEnable={setHideHeatMap}
        />
        <SwitchCustom
          label="Hide Markers"
          enable={hideMarkers}
          setEnable={setHideMarkers}
        />
      </Stack>

      <GoogleMapCustom
        data={parseReports(data)}
        hideHeatMap={hideHeatMap}
        hideMarker={hideMarkers}
      />
    </>
  );
}

const ReportMapping = () => {
  return (
    <AuthenticatedExcise>
      <Card>
        <CardHeader title="Report Mapping" />
        <MapContainer />
      </Card>
    </AuthenticatedExcise>
  );
};

export default ReportMapping;
