// index.js
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });


app.post("/submit", upload.single("resume"), (req, res) => {
  const formEntry = new FormModel({
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
    profile: req.body.profile,
    key_skills: req.body.key_skills,
    location: req.body.location,
    resume: req.file.path,
  });

  formEntry.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while saving the form entry.");
    } else {
      res.send("Form submitted successfully!");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
