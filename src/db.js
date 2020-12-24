const mongoose = require('mongoose');
const URL = process.env.URL || 'mongodb://localhost:27017/face-clone';
mongoose.connect(URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err) => {
    if(err) return console.log(error);
    console.log('DB online');
});