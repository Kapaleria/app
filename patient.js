const mongoose = require('mongoose')

//patient's name
//patient's age
//patientLocation
//patient's complaint

//BLUEPRINT 

const patientSchema = new mongoose.Schema({
    patientName:{
        //KEY:VALUE pairs
            type:String,
            //Irene
            required:true
    },

    patientAge:{
        type:Number,
        //20
        required:true
    },

    patientLocation :{
        type:String,
        //Ntinda
        required:false
    },

    patientComplaint:{
        type:String,
        //headache
        required:true
    }
}, 
{timestamps:true}

)

module.exports= mongoose.model('patientForm', patientSchema)