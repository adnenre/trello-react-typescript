import mongoose from 'mongoose';
import config from './config.js';

const db = {
    successCallback: function () {
        console.log('✅ Connected succefully to database!');
    },
    catchError: function (error) {
        console.log('connextion to database failed !', error);
    },
};
export const dbConnect = async (url = config.dbUrl) => {
    mongoose.set('strictQuery', true);
    return await mongoose
        .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(db.successCallback)
        .catch(db.catchError);
};
