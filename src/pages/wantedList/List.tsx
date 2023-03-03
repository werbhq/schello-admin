import {
  List,
  Datagrid,
  ImageField,
  TextField,
  NumberField,
  FunctionField,
} from "react-admin";
import FACE_DATA from "../../components/face/FaceData";
import { WantedList } from "../../types/WantedList";

export const WantedPersonList = () => {
  return (
    <List>
      <Datagrid rowClick={"show"}>
        <TextField source="name" emptyText="-" />
        <NumberField source="age" emptyText="-" />
        <ImageField source="photoUrl" label="Photo" />
        <FunctionField
          source="reported"
          render={(resource: WantedList) => resource["reported"].length}
        ></FunctionField>
        {Array.from(FACE_DATA.keys()).map((e, index) => (
          <TextField
            key={index}
            source={`facialData.${e}`}
            label={FACE_DATA.get(e)?.label ?? ""}
          />
        ))}
      </Datagrid>
    </List>
  );
};
