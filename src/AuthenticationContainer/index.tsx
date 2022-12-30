import Box from '@mui/material/Box';
import { Alert, Stack } from '@mui/material';

import {
    AuthenticationContainer,
    AuthenticationPage,
} from './AuthenticationContainer.styled';
import { IbackendResponce } from '../interfaces';
import TrelloLogo from '../Components/Logo';

type IAuthPage = {
    backendResponce: IbackendResponce | null;
};

const AuthPage: React.FC<IAuthPage> = ({ backendResponce, children }) => {
    return (
        <AuthenticationPage>
            <AuthenticationContainer>
                <Box
                    sx={{
                        width: '400px',
                        background: 'white',
                        borderRadius: '10px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            padding: '1rem',
                        }}
                    >
                        <TrelloLogo />
                    </Box>

                    <Box
                        sx={{
                            boxShadow: '0 0 20px 8px #b1b6f39c',
                            width: '350px',
                            margin: 'auto',
                            borderRadius: '10px',
                            background:
                                'linear-gradient(45deg, #30b4ff, #c0b6f2)',
                        }}
                    >
                        {children}
                    </Box>
                    <Box
                        sx={{
                            padding: '1rem 0',
                            width: '350px',
                            margin: 'auto',
                        }}
                    >
                        <Stack spacing={1}>
                            {backendResponce?.message && (
                                <Alert severity="error">
                                    {' '}
                                    {backendResponce?.message}
                                </Alert>
                            )}
                            {backendResponce?.hints && (
                                <Alert severity="info">
                                    {backendResponce?.hints}
                                </Alert>
                            )}
                        </Stack>
                    </Box>
                </Box>
            </AuthenticationContainer>
        </AuthenticationPage>
    );
};

export default AuthPage;
