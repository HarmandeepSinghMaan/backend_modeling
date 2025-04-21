import mongoose from 'mongoose';

const hosptialSchema = new mongoose.Schema({}, { timestamps: true });

export const Hospital = mongoose.model('Hospital', hosptialSchema);
