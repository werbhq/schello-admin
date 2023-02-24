import {
  BooleanField,
  DateField,
  EmailField,
  TextField,
  List,
  Datagrid,
  SearchInput,
  BooleanInput,
  SelectField,
  SelectInput,
  UrlField,
  ImageField,
} from "react-admin";
import { convertSingleValueListToSelectList } from "../../../utils/helpers";
import { PlatForm } from "../../../utils/platform";

export const VideoList = () => {
  const filters = [
    <SearchInput source="title" alwaysOn resettable />,
    <BooleanInput source="visible" resettable />,
    <SelectInput
      source="platform"
      choices={PlatForm.options.map(convertSingleValueListToSelectList)}
    />,
  ];

  return (
    <List>
      <Datagrid rowClick="show" filters={filters}>
        <TextField source="title" />
        <TextField source="author" />
        <EmailField source="email" />
        <SelectField
          source="platform"
          choices={PlatForm.options.map(convertSingleValueListToSelectList)}
        />
        <UrlField source="url" />
        <ImageField source="thumbnail" />
        <DateField
          source="timestamp"
          label="Date"
          showDate={true}
          locales={"en-GB"}
        />
        <BooleanField source="visible" />
      </Datagrid>
    </List>
  );
};

export default VideoList;
