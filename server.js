// imports
const app = require('./app');

require('dotenv').config();
require('./helpers/mongodb.helper');

// constants
const PORT = process.env.PORT || 5000;

// start the server
app.listen(PORT, () => {
    console.log(`server running at port ${PORT}...`);
});