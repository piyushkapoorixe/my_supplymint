import {handleActions} from 'redux-actions';
import update from 'immutability-helper';
import * as constants from '../../constants';

let initialState = {
  sample: {
    data:       {},
    isLoading:  false,
    isError:    false,
    isSuccess:  false,
    message:    ''
  }
};

const sampleRequest = (state, action) => update(state, {
    sample: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const sampleSuccess = (state, action) => update(state, {
    sample: {
    data:       {$set: action.payload},
    isLoggedIn: {$set: true},
    isLoading:  {$set: false},
    isError:    {$set: false},
    isSuccess:  {$set: true},
    message:    {$set: 'Blog success'}
  }
});
const sampleError = (state, action) => update(state, {
    sample: {
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: action.payload}
  }
});

export default handleActions({
  [constants.SAMPLE_REQUEST]: sampleRequest,
  [constants.SAMPLE_SUCCESS]: sampleSuccess,
  [constants.SAMPLE_ERROR]:   sampleError,
}, initialState);
