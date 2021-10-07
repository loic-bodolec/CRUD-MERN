const express = require('express');
const cors = require('cors');
const app = express();
require('./db/db.config');
const errorHandler = require("./tools/errorsHandler");
const routerPosts = require('./routes/posts');

app.use(express.json());
app.use(cors());

app.use('/posts', routerPosts);

app.use(errorHandler.error);

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
