import mongoose from 'mongoose';

const hosptialSchema = new mongoose.Schema({
  name:{
    required:true,
    type:String,

  },
  address:{
    type:String,
    required:true,
  },
  city:{
    type:String,
    required:true,

  },
  pincode:{
    type:String,
    required:true,

  },
  specialzedIn:{
    type:String,
    required:true,
  }
}, { timestamps: true });

export const Hospital = mongoose.model('Hospital', hosptialSchema);
