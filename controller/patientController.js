

const Patient = require('../models/patient'); 
const Report = require('../models/report');

const getPatient = async (req,res)=>{

    try {
        const patientId = parseInt(req.params.id); // Convert the id from the request parameters to an integer
    
        const patient = await Patient.findOne({ patientId }).populate('reports'); // Find by patientId
    
        if (!patient) {
            return res.status(404).json({ message: 'Patient not found' });
        }
    
        res.json(patient);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
    
}



const updatePatient = async (req, res) => {
    try {
        const patientId = parseInt(req.params.id); // Convert the id from the request parameters to an integer
        const updatedPatient = await Patient.findOneAndUpdate(
            { patientId },
            req.body,
            { new: true } // Return the updated document
        ).populate('reports');

        if (!updatedPatient) {
            return res.status(404).json({ message: 'Patient not found' });
        }

        res.json(updatedPatient);
    } catch (err) {
        console.error(err); // Log error details for debugging
        res.status(500).json({ message: 'Server error' });
    }
}

module.exports = {
    getPatient,
    updatePatient // Export the new method
}
