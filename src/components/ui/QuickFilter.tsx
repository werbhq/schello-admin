import { Chip } from "@mui/material";

const QuickFilter = ({ label }: { label: string }) => {
  return <Chip sx={{ marginBottom: 1 }} label={label} />;
};

export default QuickFilter;
