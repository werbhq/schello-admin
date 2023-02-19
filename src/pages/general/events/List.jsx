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

export const EventList = () => {
  const filters = [
    <SearchInput source="title" alwaysOn resettable />,
    <SelectInput source="mode" choices={eventModes} resettable />,
    <BooleanInput source="visible" resettable />,
  ];

  return (
    <List filters={filters}>
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
