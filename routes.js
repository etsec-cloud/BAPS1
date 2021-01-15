const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const connection = mysql.createPool({
  // host: "127.0.0.1:8889",
  host: "localhost",
  port: "8889",
  user: "root",
  password: "root",
  database: "testDb"
});
const app = express();
// Creating a GET route that returns data from the 'users' table.
app.get("/users", function(req, res) {
  // Connecting to the database.
  connection.getConnection(function(err, connection) {
    // Executing the MySQL query (select all data from the 'users' table).
    connection.query("SELECT * FROM user", function(error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;
      console.log(results);

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results);
    });
  });
});
app.post("/", function(req, res) {
  connection.getConnection(function(err, connection) {
    // Executing the MySQL query (select all data from the 'users' table).
    connection.query(
      "INSERT INTO user (email, mdp) VALUES ('Company Inc', 'Highway 37')",
      function(error, results, fields) {
        // If some error occurs, we throw an error.
        if (error) throw error;
        console.log(results);

        // Getting the 'response' from the database and sending it to our route. This is were the data is.
        res.send(results);
      }
    );
  });
});

// Starting our server.
app.listen(3000, () => {
  console.log("Go to http://localhost:3000/users so you can see the data.");
});
