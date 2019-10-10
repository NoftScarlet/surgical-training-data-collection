// use typescript enum rather than action constants
export enum actionTypes {
  ADD_CON = "ADD_CONSENT_FORM",
  ADD_PAR = "ADD_PARTICIPANT_INFO",
  ADD_SUR = "ADD_SURVEY",
  DELETE = "DELETE"
}


export interface addConsentForm {
  type: actionTypes.ADD_CON;
  data: object;
}

export function addParticipantInfo(data : object) {
  return {
    type: actionTypes.ADD_PAR,
    data
  }
}
export function addSurvey(data : object) {
  return {
    type: actionTypes.ADD_SUR,
    data
  }
}
