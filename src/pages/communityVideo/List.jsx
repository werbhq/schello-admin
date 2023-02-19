import {
  BooleanField,
  DateField,
  EmailField,
  TextField,
  List,
  Datagrid,
  SearchInput,
  BooleanInput,
  RichTextField,
} from "react-admin";

export const VideoList = () => {
  const filters = [
    <SearchInput source="title" alwaysOn resettable />,
    <BooleanInput source="visible" resettable />,
  ];

  return (
    <List>
      <Datagrid rowClick="show" filters={filters}>
        <TextField source="title" />
        <TextField source="author" />
        <EmailField source="email" />
        <TextField source="platform" />
        <RichTextField source="description" size="large"/>
        <DateField source="timestamp" showDate={true} />
        <BooleanField source="visible" />
      </Datagrid>
    </List>
  );
};

export default VideoList;
