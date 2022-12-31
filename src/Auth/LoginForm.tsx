import React, { useState, useEffect } from 'react';
import { Stack, FormControlLabel, Checkbox, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import STextField from '../Components/TextField';
import { TLoadingButton } from '../Components/Button';
import { useTitle } from '../hook/useTitle';
import { IloginProps, IuserLogin } from '../interfaces';
import store from '../services/StorageService';

const LoginForm: React.FC<IloginProps> = ({ onLogin, loading }) => {
    // USER INFO STATE
    const [userLoginInfo, setuserLoginInfo] = useState<IuserLogin>({
        email: '',
        password: '',
        rememberMe: false,
    });

    // ON INPUT CHANGE
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setuserLoginInfo({
            ...userLoginInfo,
            [name]: value,
        });
    };

    const handleChangeRememberMe = (e: {
        target: { name: string; checked: boolean };
    }) => {
        const { name, checked } = e.target;
        let userInfo = {
            ...userLoginInfo,
            [name]: checked,
        }
        setuserLoginInfo(userInfo);
        if (checked) {
             // login data stored encrypted
            store.setItem('l_data', userInfo);
        } else {
            store.removeItem('l_data');
        }
    };

    // ON LOGIN SUBMIT
    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        onLogin(userLoginInfo);
    };

    const getUserFromStore = () => {
       
        const userInfo = store.getItem('l_data');
        if (userInfo) {
            setuserLoginInfo(userInfo);
        }
    };

    useEffect(() => {
        getUserFromStore();
    }, []);
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
                    type="password"
                />
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={userLoginInfo.rememberMe}
                                onChange={handleChangeRememberMe}
                                name="rememberMe"
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
