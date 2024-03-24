import { Request, Response } from "express";

interface ResponseFormat {
  [key: string]: [number, string, boolean];
}
interface CustomRequest extends Request {
  id: string;
}
interface CustomResponse extends Response{}

export {ResponseFormat, CustomRequest, CustomResponse}