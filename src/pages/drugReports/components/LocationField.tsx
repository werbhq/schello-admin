import { Chip } from "@mui/material";
import { FunctionField } from "ra-ui-materialui";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Report } from "../../../types/Report";

const LocationField = (props: any) => {
  return (
    <FunctionField
      {...props}
      render={(record: Report, source: "location") => {
        return (
          <Chip
            avatar={<LocationOnIcon />}
            label={record[source].title.split(",")[0]}
            component="a"
            target="_blank"
            href={`https://www.google.com/maps/search/?api=1&query=${record[source].lat}%2C${record[source].lon}&query_place_id=${record[source].id}`}
            variant="outlined"
          />
        );
      }}
    />
  );
};

export default LocationField;
