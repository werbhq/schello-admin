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
import { FacialDataInput } from "components/face/FaceInput";
import AuthenticatedExcise from "components/auth/AuthenticatedExcise";

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
    <AuthenticatedExcise>
      <Edit mutationMode="pessimistic">
        <SimpleFormWrapper />
      </Edit>
    </AuthenticatedExcise>
  );
};
