import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config({ path: `${__dirname}/../config.env` });

import app from './app';

const DB: string = process.env.DATABASE!.replace('<PASSWORD>', process.env.DATABASE_PASSWORD!);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(con => {
    console.log(con.connections);
    console.log('DB Connection successful');
});

app.listen(process.env.PORT, () => {
    console.log('App running on port ', process.env.PORT)
});