import * as dotenv from 'dotenv';
dotenv.config();

const config = {};

config.PORT = 5000;

config.SECRET = {
    crypto: process.env.CRYPTOSECRET,
    jwt: process.env.SECRET_TOKEN,
    jwtExp: '100d',
};

config.dbUrl = process.env.MONGODB_URL;

export default config;
