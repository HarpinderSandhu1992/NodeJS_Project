const sequelize = require("./config");

sequelize.sync().then(()=> {
    console.log("Connected");
}) .catch((error) => {
    console.log(error);
});