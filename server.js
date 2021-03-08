const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

//start server
const port = process.env.PORT;

app.listen(port, () => {});
