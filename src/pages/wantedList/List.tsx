import {
  List,
  Datagrid,
  ImageField,
  TextField,
  NumberField,
} from "react-admin";
import FACE_DATA from "../../components/face/FaceData";

export const WantedPersonList = () => {
  return (
    <List>
      <Datagrid rowClick={"show"}>
        <TextField source="name" emptyText="-" />
        <NumberField source="age" emptyText="-" />
        <ImageField source="photoUrl" label="Photo" />
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
