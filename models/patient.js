// models/patient.js
const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcryptjs');

const patientSchema = new Schema({
  patientId: { type: Number, required: true, unique: true },
  doctorName: { type: String, required: true },
  doctorEmail: { type: String, required: true },
  patientEmail: { type: String, required: true },
  age: { type: Number, required: true },
  dateOfBirth: { type: Date, required: true },
  alcoholic: { type: Boolean, required: true },
  smokes: { type: Boolean, required: true },
  weight: { type: Number, required: true },
  reports: [{ type: Schema.Types.ObjectId, ref: 'Report' }],
  password: { type: String, required: true } // Add password field
}, { timestamps: true });

patientSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
