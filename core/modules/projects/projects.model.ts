import { Schema, model } from 'mongoose';


const projectSchema = new Schema({
  title: { type: String, maxlength: 64, required: true },
  description: { type: String, maxlength: 300, required: true },
  author: { type: String, maxlength: 32, required: true },
  url: { type: String, maxlength: 32, required: true },
  abstract: { type: String, maxlength: 1512, required: true },
  dateSubmitted: {
    month: { type: String, required: true, enum: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] },
    year: { type: Number, required: true, enum: [2024] }
  },
  academicYear: { type: Number, required: true, enum: [2019] },
  supervisors: [{ type: String, maxlength: 64 }],
  keywords: [{ type: String, maxlength: 64 }],
  departmentAcronym: { type: String, required: true, enum: ['compsci'] },
  ref: {
    Departments: { type: Schema.Types.ObjectId, ref: 'Departments', required: true },
    Admins: { type: Schema.Types.ObjectId, ref: 'Admins', required: true }
  },
  createdBy: { type: Schema.Types.ObjectId, ref: 'Admins', required: true }
});

export default model('Project', projectSchema);