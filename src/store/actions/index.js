import {
  REQUEST,
  SUCCESS,
  FAILURE,
  createRequestTypes,
  action
} from '../utilities';

export const TEST = createRequestTypes('TEST');

export const test = {
  request: () => action(TEST[REQUEST]),
  success: () => action(TEST[SUCCESS]),
  failure: error => action(TEST[FAILURE], { error })
};
