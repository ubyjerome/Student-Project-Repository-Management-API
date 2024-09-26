import { Document } from "mongoose";

export interface IAdmin extends Document {
    _id:string,
    firstName:string,
    lastName:string,
    email:string,
    phone:string,
    password:string,
    deleted:boolean,
    deletedAt?:Date,
    isEmailVerified?:boolean,
    emailVerfiedAt?:Date,
}