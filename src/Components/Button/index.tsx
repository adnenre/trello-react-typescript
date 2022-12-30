import { ButtonProps } from '@mui/material/Button';
import { LoadingButtonProps } from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import { StyledButton, StyledLoadingButton } from './Button.styled';

const TButton = (props: ButtonProps) => {
    return <StyledButton {...props} />;
};

const TLoadingButton = (props: LoadingButtonProps) => {
    return <StyledLoadingButton sx={{}} endIcon={<SendIcon />} {...props} />;
};
export { TLoadingButton, TButton };
