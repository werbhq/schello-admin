import {
  Datagrid,
  TextField,
  List,
  SearchInput,
  FunctionField,
  DateField,
} from "react-admin";
import AuthenticatedExcise from "components/auth/AuthenticatedExcise";
import { useState } from "react";
import DialogPrompt from "./components/DialogPrompt";
import {
  ThresholdField,
  InvestigateField,
} from "./components/ThresholdSection";
import { StudentReport } from "types/Report";

const filters = [<SearchInput source="id" alwaysOn resettable />];

const StudentList = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <AuthenticatedExcise>
      <List exporter={false} filters={filters}>
        <ThresholdField setOpen={setOpen} />
        <Datagrid rowClick="show">
          <TextField source="name" />
          <TextField source="admnNo" />
          <TextField source="rollNo" />
          <TextField source="classId" />
          <FunctionField
            source="reported"
            render={(resource: StudentReport) => resource["reported"].length}
          />
          <DateField
            source="blockTill"
            label="Blocked Till"
            showDate={true}
            locales={"en-GB"}
            emptyText="-"
          />
          <FunctionField
            source="reported"
            label="Investigate"
            render={(record: StudentReport) => <InvestigateField {...record} />}
          />
        </Datagrid>
      </List>

      {open ? <DialogPrompt setOpen={setOpen} /> : ""}
    </AuthenticatedExcise>
  );
};

export default StudentList;
