import { styled } from "@mui/material/styles";
import TextField, { TextFieldProps } from "@mui/material/TextField";

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: theme.shape.borderRadius,
}));
const STextField = (props: TextFieldProps) => {
  return (
    <StyledTextField
      sx={{
        "> .Mui-focused": {
          color: "#222 !important",
        },
        "> .Mui-focused fieldset.Mui-focused": {
          borderColor: "#222 !important",
        },
        "& label.MuiInputLabel-animated": {
          padding: "0 5px  !important",
          background: "white",
          borderRadius: "5px",
        },
        "&:hover fieldset": {
          borderColor: "red",
        },
      }}
      {...props}
    />
  );
};

export default STextField;
