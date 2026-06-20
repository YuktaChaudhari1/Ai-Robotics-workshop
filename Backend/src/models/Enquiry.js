const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: "true",
  },
contact: {
  type: String,
  required: true,
  match: [/^\d{10}$/, "Contact number must be exactly 10 digits"]
}
});
const enquiryModel = mongoose.model("Enquiry", enquirySchema);

module.exports=enquiryModel