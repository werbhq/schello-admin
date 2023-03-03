import {
  Edit,
  ImageField,
  ImageInput,
  NumberInput,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
  useRecordContext,
} from "react-admin";
import { FacialDataInput } from "../../components/face/FaceInput";

const EditToolbar = (props: any) => (
  <Toolbar {...props}>
    <SaveButton />
  </Toolbar>
);

const SimpleFormWrapper = (props: any) => {
  const record = useRecordContext();

  const newRecord = {
    ...record,
    photoUrl: {
      title: record.photoId,
      src: record.photoUrl,
    },
  };

  return (
    <SimpleForm {...props} record={newRecord} toolbar={<EditToolbar />}>
      <TextInput disabled source="id" />
      <TextInput source="name" />
      <NumberInput source="age" />
      <ImageInput source="photoUrl" maxSize={10e6} label="Photo" isRequired>
        <ImageField source="src" />
      </ImageInput>
      <FacialDataInput source="facialData" />
    </SimpleForm>
  );
};

export const WantedPersonEdit = () => {
  return (
    <Edit mutationMode="pessimistic">
      <SimpleFormWrapper />
    </Edit>
  );
};
