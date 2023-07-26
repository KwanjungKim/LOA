const express = require('express');
const app = express();
const router = require('./Router/router');

app.use('/api', router);

const port = 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})