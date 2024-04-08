import { Schema, model } from 'mongoose';


const projectSchema = new Schema({
  _id: { type: String, required: true },
  title: { type: String, maxlength: 64, required: true },
  description: { type: String, maxlength: 300, required: true },
  author: { type: String, maxlength: 32, required: true },
  url: { type: String, maxlength: 32, required: true },
  abstract: { type: String, maxlength: 1512, required: true },
  dateSubmitted: {
    month: { type: String, required: true, enum: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] },
    year: { type: Number, required: true }
  },
  academicYear: { type: Number, required: true },
  supervisors: [{ type: String, maxlength: 64 }],
  keywords: [{ type: String, maxlength: 64 }],
  departmentAcronym: { type: String, required: true },
  createdBy: { type: String, ref: 'Admins', required: true }
}, { timestamps: true });

export default model('Project', projectSchema);