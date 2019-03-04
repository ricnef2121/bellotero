import { DATA_REQUESTED
  ,DATA_REQUESTED_REVIEW
  ,DATA_REQUESTED_CALCULATOR } from '../constants/constants-actions';

//consumir api menu
export function getData() {
  return { type: DATA_REQUESTED};
}
 
//consumir api slider/reviews
export function getDataReviews() {
  return { type: DATA_REQUESTED_REVIEW};
}

//consumir api calculator
export function getDataCalculator() {
  return { type: DATA_REQUESTED_CALCULATOR};
}