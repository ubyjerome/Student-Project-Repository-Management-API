import { Schema, model } from 'mongoose';


const projectSchema = new Schema({
  _id: { type: String, required: true},
  title: { type: String, maxlength: 512, required: true, unique:true },
  description: { type: String, maxlength: 300, required: true },
  author: { type: String, maxlength: 32, required: true },
  url: { type: String, maxlength: 32, required: true },
  abstract: { type: String, maxlength: 2048, required: true },
  framework:{type: String, default:""},
  publicationDate: {
    month: { type: String, required: true, enum: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] },
    year: { type: Number, required: true }
  },
  academicYear: { type: Number, required: true },
  supervisors: [{ type: String, maxlength: 64 }],
  keywords: [{ type: String, maxlength: 64 }],
  departmentAcronym: { type: String, required: true },
  deleted:{type:Boolean, default:false},
  deletedAt:{type:Date},
  createdBy: { type: String, ref: 'Admins', required: true },
}, { timestamps: true });

export default model('Project', projectSchema);