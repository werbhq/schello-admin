import {
  Datagrid,
  TextField,
  List,
  SearchInput,
  FunctionField,
} from "react-admin";
import AuthenticatedExcise from "components/auth/AuthenticatedExcise";
import { Student } from "types/Student";
import { useState } from "react";
import DialogPrompt from "./components/DialogPrompt";
import {
  ThresholdField,
  InvestigateField,
} from "./components/ThresholdSection";

const filters = [<SearchInput source="id" alwaysOn resettable />];

const StudentList = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <AuthenticatedExcise>
      <List exporter={false} filters={filters}>
        <ThresholdField setOpen={setOpen} />
        <Datagrid rowClick="show">
          <TextField source="name" />
          <TextField source="classId" />
          <FunctionField
            source="reported"
            render={(resource: Student) => resource["reported"].length}
          ></FunctionField>

          <FunctionField
            source="reported"
            label="Investigate"
            render={(record: Student) => <InvestigateField {...record} />}
          ></FunctionField>
        </Datagrid>
      </List>

      {open ? <DialogPrompt setOpen={setOpen} /> : ""}
    </AuthenticatedExcise>
  );
};

export default StudentList;
