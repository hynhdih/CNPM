const express = require('express');
const app = express();
const mongoose =  require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require("dotenv"); 

app.use(bodyParser.json());

// get request
app.get('/', (req,res) => {
    res.send('ban dang o localhost')
});


// tạo nextpage
app.get('/nextpage', (req,res) => {
    res.send('Ban dang o nextpage')
});

// Tạo posts - lien quan den posts.js
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// kết nối đến database
dotenv.config();
mongoose.connect( (process.env.MONGODB_URL), () => console.log('connected to db!')
);


// kết nối đến server
app.listen(3000);
