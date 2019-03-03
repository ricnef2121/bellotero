import { DATA_REQUESTED,DATA_REQUESTED_REVIEW } from '../constants/constants-actions';

//consumir api menu
export function getData() {
  return { type: DATA_REQUESTED};
}
 
//consumir api slider/reviews
export function getDataReviews() {
  return { type: DATA_REQUESTED_REVIEW};
}