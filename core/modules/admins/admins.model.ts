import { Schema, model } from "mongoose";
import { IAdmin } from "./type";

const AdminSchema = new Schema(
  {
    _id:{type:String, required:true},
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailAddress: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    deleted: { type: Boolean, default: false },
    deletedAt: { type: Date },
    isEmailVerified: { type: Boolean, default: false },
    emailVerifiedAt: { type: Date },
  },
  { timestamps: true }
);

AdminSchema.methods.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const AdminModel = model<IAdmin>("Admin", AdminSchema);
export default AdminModel;