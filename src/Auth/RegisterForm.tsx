import React, { useState } from 'react';
import { Stack } from '@mui/material';
import STextField from '../Components/TextField';

import { TLoadingButton } from '../Components/Button';
import { useTitle } from '../hook/useTitle';
import { IregisterProps , IuserRegister } from '../interfaces';

const RegisterForm : React.FC<IregisterProps> = ({ onRegister, loading }) => {
    // USER INFO STATE
    const [userRegisterInfo, setUserRegisterInfo] = useState<IuserRegister>({
        username: '',
        email: '',
        password: '',
        confirmePassword: '',
    });

    // ON INPUT CHANGE
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserRegisterInfo({
            ...userRegisterInfo,
            [name]: value,
        });
    };

    // ON REGISTER SUBMIT
    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        onRegister(userRegisterInfo);
    };
    useTitle('Register');
    return (
        <form onSubmit={onSubmit}>
            <Stack direction="column" spacing={2}>
                <STextField
                    name="username"
                    label="Username"
                    value={userRegisterInfo.username}
                    onChange={handleChangeInput}
                    required
                />
                <STextField
                    name="email"
                    label="email"
                    type="email"
                    value={userRegisterInfo.email}
                    onChange={handleChangeInput}
                    required
                />
                <STextField
                    name="password"
                    label="Password"
                    value={userRegisterInfo.password}
                    onChange={handleChangeInput}
                    required
                />
                <STextField
                    name="confirmePassword"
                    label="Password Confirme"
                    value={userRegisterInfo.confirmePassword}
                    onChange={handleChangeInput}
                    required
                />
                <TLoadingButton
                    loading={loading}
                    loadingPosition="end"
                    color="success"
                    variant="contained"
                    type="submit"
                    fullWidth
                >
                    Register
                </TLoadingButton>
            </Stack>
        </form>
    );
};

export default RegisterForm;
