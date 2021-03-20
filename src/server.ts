import dotenv from 'dotenv';
dotenv.config({ path: `${__dirname}/../config.env` });

import app from './app';

app.listen(process.env.PORT, () => {
    console.log('App running on port ', process.env.PORT)
});