import mongoose from 'mongoose';

const docterSchema = new mongoose.Schema({
  name:
  {
    type:String,
    required:true,
  },
  salary:
  {
    type:String,
    required:true,
  },
  qualifications:{
    type:String,
    required:true,
  },
  experienceInYear: {
    type:Number,
    default:0.,
  }
}, { timestamps: true });

export const Docter = mongoose.model('Docter', docterSchema);
