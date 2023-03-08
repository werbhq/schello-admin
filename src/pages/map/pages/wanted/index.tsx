import { useEffect, useState } from "react";
import { useLoadScript } from "@react-google-maps/api";
import {
  Card,
  CardHeader,
  Stack,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import AuthenticatedExcise from "components/auth/AuthenticatedExcise";
import { Report } from "types/Report";
import PageLoader from "components/ui/PageLoader";
import {
  useGetList,
  ImageField,
  NumberField,
  SimpleShowLayout,
  FunctionField,
} from "react-admin";
import MAPPING from "provider/mapping";
import { SwitchCustom } from "components/ui/SwitchCustom";
import { WantedList } from "types/WantedList";
import { libraries } from "pages/map/constants";
import { parseReports } from "pages/map/helpers/parseReport";
import GoogleMapCustom from "pages/map/components/GoogleMapCustom";

const mapStyles = {
  height: "70vh",
  width: "100%",
  margin: "10px",
};

function MapContainer({
  wantedPersonId,
  hideHeatMap,
  hideMarkers,
}: {
  wantedPersonId: string;
  hideMarkers: boolean;
  hideHeatMap: boolean;
}) {
  const { isLoaded: isMapsLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY ?? "",
    libraries,
  });

  const { isLoading, data } = useGetList<Report>(MAPPING.DRUG_REPORTS, {
    filter: { wantedPersonId },
  });

  if (loadError) return <div>Map cannot be loaded right now, sorry.</div>;
  if (!(isMapsLoaded && !isLoading)) return <PageLoader loading={true} />;

  return (
    <GoogleMapCustom
      data={parseReports(data ?? [])}
      hideHeatMap={hideHeatMap}
      hideMarker={hideMarkers}
      mapStylesCustom={mapStyles}
    />
  );
}

const SelectPerson = () => {
  const { isLoading, data } = useGetList<WantedList>(MAPPING.WANTED_LIST);
  const [wantedPersonId, setWantedPersonId] = useState<string>("");

  const [hideMarkers, setHideMarkers] = useState(false);
  const [hideHeatMap, setHideHeatMap] = useState(false);

  useEffect(() => {
    if (data && data?.length !== 0) {
      setWantedPersonId(data[data.length - 1].id);
    }
  }, [data]);

  if (isLoading) return <PageLoader loading={isLoading} />;

  return (
    <Stack>
      <Stack
        paddingLeft={2}
        direction="row"
        spacing={2}
        justifyContent="space-between"
      >
        <FormControl sx={{ width: "30%" }}>
          <InputLabel id="wanted_person">Wanted Person Name</InputLabel>
          <Select
            value={wantedPersonId}
            label="Wanted Person Name"
            labelId="wanted_person"
            onChange={(e) => setWantedPersonId(e.target.value)}
          >
            {data?.map((e, index) => (
              <MenuItem value={e.id}>{e.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        {data?.find((e) => e.id === wantedPersonId)?.reported.length !== 0 && (
          <Stack direction="row">
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
        )}
      </Stack>
      <Stack direction="row">
        <SimpleShowLayout record={data?.find((e) => e.id === wantedPersonId)}>
          <NumberField source="age" emptyText="-" />
          <ImageField source="photoUrl" label="Photo" />
          <FunctionField
            source="reported"
            label="Reported Cases"
            render={(resource: WantedList) => resource["reported"].length}
          ></FunctionField>
        </SimpleShowLayout>
        {data?.find((e) => e.id === wantedPersonId)?.reported.length !== 0 && (
          <MapContainer
            wantedPersonId={wantedPersonId}
            hideHeatMap={hideHeatMap}
            hideMarkers={hideMarkers}
          />
        )}
      </Stack>
    </Stack>
  );
};

const WantedMapping = () => {
  return (
    <AuthenticatedExcise>
      <Card>
        <CardHeader title="Wanted List Mapping" />
        <SelectPerson />
      </Card>
    </AuthenticatedExcise>
  );
};

export default WantedMapping;
