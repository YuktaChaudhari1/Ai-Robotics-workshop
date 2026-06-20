const enquiryModel = require("../models/Enquiry");
const mongoose = require("mongoose");

async function createEnquiry(req, res) {
  try {
    const { name, email, contact } = req.body;

    if (!name || !email || !contact) {
      return res.status(400).json({ message: "All  fields are required " });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    const contactRegex = /^\d{10}$/;

    if (!contactRegex.test(contact)) {
      return res.status(400).json({
        message: "Contact number must be exactly 10 digits",
      });
    }

    const enquiry = await enquiryModel.create({
      name,
      email,
      contact,
    });

    return res.status(201).json({
      message: "Enquiry submitted successfully",
      data: enquiry,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Server Error",
    });
  }
}
module.exports = createEnquiry;
