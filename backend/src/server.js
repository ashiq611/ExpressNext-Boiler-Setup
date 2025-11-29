const app = require("./app");
const pool = require("./db/db");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await pool.connect();
    console.log("Connected to PostgreSQL");

    app.listen(PORT, () => {
      console.log("Server running on port", PORT);
    });

  } catch (err) {
    console.error(err);
  }
};

start();
