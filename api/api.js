const express = require("express");
const { setRoutes } = require("../config/routes");
const cors = require('cors');

const app = express();

app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// Middleware to parse url-encoded data
app.use(express.urlencoded({ extended: false }));

setRoutes(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
