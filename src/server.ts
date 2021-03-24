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

const tourSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'A tour must have a name'],
        unique: true
    },
    rating: {
        type: Number,
        default: 4.5
    },
    price: {
        type: Number,
        required: [true, 'A tour must have a price']
    }
});

const Tour = mongoose.model('Tour', tourSchema);

const testTour = new Tour({
    name: 'The Forest Hiker',
    rating: 4.7,
    price: 498
});

testTour.save().then(doc => console.log(doc));

app.listen(process.env.PORT, () => {
    console.log('App running on port ', process.env.PORT)
});