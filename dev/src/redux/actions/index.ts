import { action } from "typesafe-actions";

// use typescript enum rather than action constants
export enum actionTypes {
  ADD_CON = "ADD_CONSENT_FORM",
  ADD_PAR = "ADD_PARTICIPANT_INFO",
  ADD_SUR = "ADD_SURVEY",
  DELETE = "DELETE"
}


export const actionCreators = {
  //action is created on invoking the following properties
  addConsentForm: (item: object) => action(actionTypes.ADD_CON, item),
  addParticipantInfo: (item: object) => action(actionTypes.ADD_PAR, item),
  addSurvey: (item: object) => action(actionTypes.ADD_SUR, item),
  delete: (idx: number) => action(actionTypes.DELETE, idx)
};