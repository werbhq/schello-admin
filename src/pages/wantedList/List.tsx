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
import AuthenticatedExcise from "../../components/auth/AuthenticatedExcise";

export const WantedPersonList = () => {
  return (
    <AuthenticatedExcise>
      <List>
        <Datagrid rowClick={"show"}>
          <TextField source="name" emptyText="-" />
          <NumberField source="age" emptyText="-" />
          <ImageField
            source="photoUrl"
            sx={{
              "& img": { maxWidth: 70, maxHeight: 70, objectFit: "contain" },
            }}
            label="Photo"
          />
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
    </AuthenticatedExcise>
  );
};
