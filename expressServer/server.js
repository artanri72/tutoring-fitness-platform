// set up ======================================================================
const express = require('express');

const app = express(); // create our app w/ express

const port = process.env.PORT || 8000; // set the port
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cors = require('cors');
const fileUpload = require('express-fileupload');
// configuration ===============================================================

app.use(express.static('./public')); // set the static files location /public/img will be /img for users

app.use(morgan('dev')); // log every request to the console
app.use(
  bodyParser.urlencoded({
    extended: 'true',
    limit: '50mb',
  }),
); // parse application/x-www-form-urlencoded
app.use(
  bodyParser.json({
    extended: 'true',
    limit: '50mb',
  }),
); // parse application/json
app.use(
  bodyParser.json({
    type: 'application/vnd.api+json',
  }),
); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request
app.use(cookieParser());
const corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token'],
};
app.use(cors(corsOption));
app.use(cors());
app.use(fileUpload());
// routes ======================================================================
require('./app/routes.js')(app);

// listen (start app with node server.js) ======================================
app.listen(port);
