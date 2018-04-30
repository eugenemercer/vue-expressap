console.log('Hello start');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined')); // print logs
app.use(bodyParser.json());// easily parse json req sent in
app.use(cors()); // server hostd on domain
app.get('/status', (req, res) => {
res.send({
        message: 'Hello',
    });
});
app.listen(process.env.PORT || 8081);
