const express = require('express');
const patientRoute = express();
const bodyParser = require('body-parser');



patientRoute.use(bodyParser.json());
patientRoute.use(bodyParser.urlencoded({extended:true}));


const { getPatient, updatePatient } = require('../controller/patientController'); // Adjust path as necessary


patientRoute.get('/patient/:id', getPatient);
patientRoute.put('/patient/:id', updatePatient)




// // Update a patient by ID
// patientRouter.put('/patients/:id', async (req, res) => {
//     try {
//         const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!patient) {
//             return res.status(404).json({ message: 'Patient not found' });
//         }
//         res.json(patient);
//     } catch (err) {
//         res.status(500).json({ message: 'Server error' });
//     }
// });

module.exports = patientRoute;
