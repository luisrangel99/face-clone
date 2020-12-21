const mongoose = require('mongoose');
let url = "mongodb+srv://quique:h36!36dms@cluster0.yl9oy.mongodb.net/facebook?retryWrites=true&w=majority";
const URL = process.env.URL || 'mongodb://localhost:27017/face-clone';

mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err) => {
    if(err) return console.log(error);
    console.log('DB online');
});