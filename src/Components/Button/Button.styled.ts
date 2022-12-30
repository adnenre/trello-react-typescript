import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';

export const StyledButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(1),
    color: 'white',
    borderRadius: theme.shape.borderRadius,
}));

export const StyledLoadingButton = styled(LoadingButton)(({ theme }) => ({
    padding: theme.spacing(1),
    color: 'white',
    borderRadius: theme.shape.borderRadius,
    '&.MuiLoadingButton-loading': {
        background: 'white',
    },
}));
