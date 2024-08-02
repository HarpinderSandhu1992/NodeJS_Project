const express = require("express");
const sequelize = require("./config");
const Department = require("./models/department");
const Employer = require("./models/employer");

sequelize
  .sync()
  .then(() => {
    console.log("Connected");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/employers", (req, res) => {
  Employer.findAll()
    .then((employers) => {
      res.send(employers);
    })
    .catch((error) => res.send(error, 500));
});

app.get("/employers/:id", (req, res) => {
  const id = req.params.id;
  Employer.findByPk(id)
    .then((employer) => {
      if (!employer) {
        return res.status(404).send({ message: "Employer not found" });
      }
      res.send(employer);
    })
    .catch((error) => res.send(error, 500));
});

app.patch("/employers/:id", (req, res) => {
  const id = req.params.id;
  const { name, department, salary } = req.body;
  Employer.findByPk(id)
    .then((employer) => {
      if (!employer) {
        return res.status(404).send({ message: "Employer not found" });
      }
      console.log(employer);
      employer.Name = name;
      employer.Department = department;
      employer.Salary = salary;
      employer
        .save()
        .then((employer) => {
          res.send(employer);
        })
        .catch((error) => {
          res.send(error);
        });
    })
    .catch((error) => {
      res.send(error, 500);
    });
});

app.post("/employers", (req, res) => {
  // Get submitted data
  const new_employer = {
    Name: req.body.name,
    Salary: req.body.salary,
    Department: req.body.department,
  };
  // Insert new employer data into database
  Employer.create(new_employer)
    .then((employer) => {
      res.send(employer, 201);
    })
    .catch((error) => res.send(error, 500));
});
app.listen(3000, function () {
  console.log("Server connected");
});

app.delete("/employers/:id", (req, res) => {
  const id = req.params.id;
  Employer.findByPk(id)
    .then((employer) => {
      if (!employer) {
        return res.status(404).send({ message: "Employer not found" });
      }
      // Upto here - found employer - now delete employer from database
      employer.destroy();
      res.send(employer);
    })
    .catch((error) => res.send(error, 500));
});
