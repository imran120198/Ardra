const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  name: String,
  number: String,
  email: String,
  profile: String,
  key_skills: String,
  location: String,
  resume: String,
});

const FormModel = new mongoose.model("form", FormSchema);

module.exports = {
  FormModel,
};
