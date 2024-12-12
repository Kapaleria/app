//HTTP methods

//post,get,patch, delete,put methods
  
//import the shema that we created: the patient.js file
const express= require('express')
const router = express.Router()
const Patient = require('./patient')

// HOW TO WE SEND DATA TO THE DATABASE -we use the post method
router.post('/sendData', async(req,res)=>{
    const patientData= new Patient({
        patientName: req.body.patientName,
        patientAge: req.body.patientAge,
        patientLocation: req.body.patientLocation,
        patientComplaint: req.body.patientComplaint
    })
        try{
                //if successful
                const savedPatientData = await patientData.save()
                //age:39
                //location:"NAKAWA"
                res.json(savedPatientData)
        }

        catch(err){
            //if unsuccessful
                res.status(500).json({msg:err})
        }
})

module.exports=router