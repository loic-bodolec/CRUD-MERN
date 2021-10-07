const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB Atlas :
// mongoose.connect(
//   `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster2.hhvgw.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
//   { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
// );


// localhost:
mongoose.connect(
`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
.then(() => console.log(`Connected, ${new Date()}`))
.catch(err => console.log(err));