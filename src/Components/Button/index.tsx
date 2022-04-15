import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1),
  color: "white",
  borderRadius: theme.shape.borderRadius,
}));
const TButton = (props: ButtonProps) => {
  return <StyledButton {...props} />;
};

export default TButton;
