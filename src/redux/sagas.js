import { takeLatest } from "redux-saga/effects";
import * as constants from "./constants";

import { sampleRequest } from "./sample/action/";

export function* watchActions() {
  yield takeLatest(constants.SAMPLE_REQUEST, sampleRequest);
}

export default function* rootSaga() {
  yield [watchActions()];
}
