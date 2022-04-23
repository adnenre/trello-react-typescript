import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";

const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1),
  color: "white",
  borderRadius: theme.shape.borderRadius,
}));

const TButton = (props: ButtonProps) => {
  return <StyledButton {...props} />;
};

const StyledLoadingButton = styled(LoadingButton)(({ theme }) => ({
  padding: theme.spacing(1),
  color: "white",
  borderRadius: theme.shape.borderRadius,
}));

const TLoadingButton = (props: LoadingButtonProps) => {
  return <StyledLoadingButton {...props} />;
};
export { TLoadingButton, TButton };
