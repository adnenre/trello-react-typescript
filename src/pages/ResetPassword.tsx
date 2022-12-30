import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthenticationContainer from '../AuthenticationContainer';
import STextField from '../Components/TextField';
import { TLoadingButton } from '../Components/Button';
import { Stack, Typography } from '@mui/material';
import { useTitle } from '../hook/useTitle';
import AuthService from '../services/AuthService';
import { Link } from 'react-router-dom';
type backendResponce = {
    status: number;
    message: string;
    hints?: string;
} | null;

const ResetPassword = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [backendResponce, setBackendResponce] =
        useState<backendResponce>(null);
    const handeleSetResetEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleSubmit = async (email: string) => {
        setLoading(true);

        let responce = await AuthService.resetPassword(email);

        if (responce.status) {
            setLoading(false);
            navigate('/Login');
        } else {
            setBackendResponce(responce);
            setTimeout(() => setBackendResponce(null), 3000);
        }
    };
    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        handleSubmit(email);
    };
    useTitle('Reset Password');
    return (
        <AuthenticationContainer backendResponce={backendResponce}>
            <form onSubmit={onSubmit}>
                <Stack
                    direction="column"
                    alignItems="center"
                    justifyContent="space-between"
                    gap={1}
                    padding="24px"
                >
                    <Typography
                        variant="subtitle2"
                        color="success"
                        sx={{
                            padding: '1rem 0',
                            textAlign: 'center',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            color: '#ffffff',
                        }}
                    >
                        Enter the email address associated with your account and
                        we'll send you a link to reset your password.
                    </Typography>
                    <STextField
                        name="email"
                        label="email"
                        type="email"
                        value={email}
                        onChange={handeleSetResetEmail}
                        required
                        fullWidth
                        sx={{ margin: '1rem ' }}
                    />
                    <TLoadingButton
                        loading={loading}
                        loadingPosition="end"
                        color="success"
                        variant="contained"
                        type="submit"
                        fullWidth
                    >
                        Continue
                    </TLoadingButton>

                    <Typography
                        variant="subtitle2"
                        color="success"
                        sx={{
                            padding: '0.5rem',
                            textAlign: 'center',
                            textDecoration: 'none',
                            cursor: 'pointer',
                            color: '#ffffff',
                        }}
                    >
                        <Link to="/">login</Link>
                    </Typography>
                </Stack>
            </form>
        </AuthenticationContainer>
    );
};

export default ResetPassword;
