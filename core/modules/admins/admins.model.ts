import { Schema, model } from "mongoose";
import { IAdmin } from "./type";
import { string } from "joi";

const Admin = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: string, required: true, unique: true },
    password: { type: string, required: true },
    deleted: { type: Boolean, default: false },
    deletedAt: { type: Date },
    isEmailVerified: { type: Boolean, default: false },
    emailVerfiedAt: { type: Date },
  },
  { timestamps: true }
);

const AdminModel = model<IAdmin>("Parent", Admin);
export default AdminModel