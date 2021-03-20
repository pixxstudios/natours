import app from './app';

const PORT: number = 3000;
app.listen(PORT, () => {
    console.log('App running on port ', PORT)
});