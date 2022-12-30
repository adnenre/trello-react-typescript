import React, { useState } from 'react';
import { Stack, FormControlLabel, Checkbox, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import STextField from '../Components/TextField';
import { TLoadingButton } from '../Components/Button';
import { useTitle } from '../hook/useTitle';
import { IloginProps, IuserLogin } from '../interfaces';

const LoginForm: React.FC<IloginProps> = ({ onLogin, loading }) => {
    // REMEMBER USER CREDENTIAL CHECKED
    const [checked, setChecked] = useState(false);

    // USER INFO STATE
    const [userLoginInfo, setuserLoginInfo] = useState<IuserLogin>({
        email: '',
        password: '',
    });

    // ON INPUT CHANGE
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setuserLoginInfo({
            ...userLoginInfo,
            [name]: value,
        });
    };

    // ON LOGIN SUBMIT
    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        onLogin(userLoginInfo);
    };
    // HANDLE CHECKED REMEMBER ME
    const handleChecked = (e) => setChecked(e.target.checked);
    useTitle('Login');
    return (
        <form onSubmit={onSubmit}>
            <Stack direction="column" spacing={2}>
                <STextField
                    name="email"
                    label="email"
                    value={userLoginInfo.email}
                    onChange={handleChangeInput}
                    required
                />
                <STextField
                    name="password"
                    label="Password"
                    value={userLoginInfo.password}
                    onChange={handleChangeInput}
                    required
                />
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={checked}
                                onChange={handleChecked}
                                name="checked"
                                color="success"
                            />
                        }
                        color="#ffffff"
                        label="Remember me"
                    />
                </Stack>
                <TLoadingButton
                    loading={loading}
                    loadingPosition="end"
                    color="success"
                    variant="contained"
                    type="submit"
                    fullWidth
                >
                    Login
                </TLoadingButton>

                <Typography
                    variant="subtitle2"
                    color="success"
                    sx={{
                        textAlign: 'center',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        color: '#ffffff',
                    }}
                >
                    <Link to="/resetPassword">Forgot Password?</Link>
                </Typography>
            </Stack>
        </form>
    );
};

export default LoginForm;
