// use typescript enum rather than action constants
export enum actionTypes {
  ADD_CON = "ADD_CONSENT_FORM",
  ADD_PAR = "ADD_PARTICIPANT_INFO",
  ADD_SUR = "ADD_SURVEY",
}

interface addConsentForm {type: typeof actionTypes.ADD_CON, data: object}
interface addParticipantInfo {type: typeof actionTypes.ADD_PAR, data: object}
interface addSurvey {type: typeof actionTypes.ADD_SUR, data: object}


export const addConsentForm = (data : object) => {
  return {
    type: actionTypes.ADD_CON,
    data
  }
};


export const addParticipantInfo = (data : object) => {
  return {
    type: actionTypes.ADD_PAR,
    data
  }
};

export const addSurvey = (data : object) => {
  return {
    type: actionTypes.ADD_SUR,
    data
  }
};


export type Actions =
  addConsentForm |
  addParticipantInfo |
  addSurvey
