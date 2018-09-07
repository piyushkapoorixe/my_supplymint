import { createAction } from "redux-actions";
import * as constants from "./constants";

export const sampleRequest = createAction(constants.SAMPLE_REQUEST);
export const sampleSuccess = createAction(constants.SAMPLE_SUCCESS);
export const sampleError = createAction(constants.SAMPLE_ERROR);
