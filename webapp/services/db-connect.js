//Including dependency
var Sequelize = require("sequelize");

//Setting up the config
var sequelize = new Sequelize(
  "your-database-name",
  "db-username",
  "db-password",
  {
    host: "ec2-18-225-5-181.us-east-2.compute.amazonaws.com",
    port: 3306,
    dialect: "mysql"
  }
);

//Checking connection status
sequelize
  .authenticate()
  .then(function(err) {
    if (err) {
      console.log("There is connection in ERROR");
    } else {
      console.log("Connection has been established successfully");
    }
  })
  .catch(err => {
      console.log(err)
  });
