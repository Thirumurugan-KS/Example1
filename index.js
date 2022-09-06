const app = require('./app');
const mongoose = require('mongoose');

const port = process.env.PORT || 8000;

mongoose.connect(process.env.MONGODB, () => {
    console.log("DB Connected");
});

app.listen(port , ()=>{
    console.log(`App is running at ${port}`);
});