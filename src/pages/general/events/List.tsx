import {
  BooleanField,
  BooleanInput,
  Datagrid,
  DateField,
  List,
  SearchInput,
  SelectInput,
  TextField,
  UrlField,
} from "react-admin";
import { eventModes } from "./Constants";
import useTenant from "hooks/useTenant";

export const EventList = () => {
  const tenant = useTenant();

  const filters = [
    <SearchInput source="title" alwaysOn resettable />,
    <SelectInput source="mode" choices={eventModes} resettable />,
    <BooleanInput source="visible" />,
  ];

  return (
    <List filters={filters} filterDefaultValues={{ tenant }}>
      <Datagrid rowClick="show">
        <TextField source="mode" />
        <TextField source="title" />
        <BooleanField source="visible" />
        <UrlField source="register_url" emptyText="N/A" />
        <DateField source="date_from" locales={"en-GB"} />
        <DateField source="date_to" locales={"en-GB"} />
        <DateField
          source="time_from"
          showDate={false}
          showTime
          options={{
            timeStyle: "short",
          }}
        />
        <DateField
          source="time_to"
          showDate={false}
          showTime
          options={{
            timeStyle: "short",
          }}
        />
        <UrlField source="venue" />
      </Datagrid>
    </List>
  );
};

export default EventList;
