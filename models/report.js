const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Report schema
const reportSchema = new Schema({
  patientId: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
  tests: [
    {
      testName: { type: String, required: true },
      result: { type: String, required: true },
      date: { type: Date, required: true } // Corrected type
    }
  ],
}, { timestamps: true });

// Create the Report model
const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
