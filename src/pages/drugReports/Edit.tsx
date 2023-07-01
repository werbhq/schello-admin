import {
  Edit,
  SaveButton,
  SelectInput,
  SimpleForm,
  Toolbar,
  WithRecord,
  useDataProvider,
} from "react-admin";
import AuthenticatedExcise from "components/auth/AuthenticatedExcise";
import { STATUS_TYPE } from "./constant";
import { Report, StudentReport } from "types/Report";
import MAPPING from "provider/mapping";
import { useEffect, useState } from "react";

const CustomToolbar = (props: any) => (
  <Toolbar {...props} sx={{ display: "flex", justifyContent: "space-between" }}>
    <SaveButton />
  </Toolbar>
);

const DrugEdit = () => {
  const dataProvider = useDataProvider();
  const [studentChoices, setStudentChoices] = useState<
    {
      id: string;
      name: string;
    }[]
  >([]);
  const [studentIds, setStudentIds] = useState<string[]>([]);

  useEffect(() => {
    const data = dataProvider.getMany<StudentReport>(MAPPING.STUDENTS, {
      ids: studentIds,
    });

    data.then((e) => {
      const studentChoices = e.data?.map((e) => ({
        id: e.id,
        name: `${e.name} (Roll: ${e.rollNo})`,
      }));

      setStudentChoices(studentChoices);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentIds]);

  return (
    <AuthenticatedExcise>
      <Edit mutationMode="pessimistic">
        <SimpleForm toolbar={<CustomToolbar />}>
          <SelectInput
            choices={STATUS_TYPE}
            source="status"
            required
            fullWidth
          />
          <WithRecord
            render={(record: Report) => {
              if (record.studentIds.length !== studentIds.length) {
                setStudentIds(record.studentIds);
              }
              return (
                <SelectInput
                  choices={studentChoices}
                  source="studentConfirmed"
                  fullWidth
                />
              );
            }}
          />
        </SimpleForm>
      </Edit>
    </AuthenticatedExcise>
  );
};

export default DrugEdit;
