import {CustomRequest, CustomResponse} from "./types"
import { response } from "./responseFormat";
import { randomUUID } from "crypto";
import logger from "../logger";

class serverResponse {
    handleResponse(
      req: CustomRequest,
      res: CustomResponse,
      data: Object,
      responseStatus: string,
      message: string
    ) {
      let requestId = `req_${randomUUID()}`
      req.id = requestId
      let responseArray = response(responseStatus);
      const responseObject = {
        isSuccess:responseArray[2],
        status: responseArray[1],
        statusCode: responseArray[0],
        data: data || [],
        message: message || responseArray[1],
      };
      res.status(responseArray[0]).json(responseObject);
      logger.info(`${req.id}\t${req.method}:\t${req.url}\t${res.statusCode}`);
    }
  
    handleError(
      req: CustomRequest,
      res: CustomResponse,
      errorType: string,
      message: string,
      error?: Error,
    ) {      
      let requestId = `req_${randomUUID()}`
      req.id = requestId
      const errorArray = response(errorType);
      const responseObject = {
        isSuccess:errorArray[2],
        status: errorArray[1],
        statusCode: errorArray[0],
        data: [],
        message: message || errorArray[1],
        errorMessage: error?.message,
      };
      res.status(errorArray[0]).json(responseObject);
      logger.error(`${req.id}\t${req.method}:\t${req.url}\t${res.statusCode}`);
    }
  }
  
  module.exports = new serverResponse();