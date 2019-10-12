import { actionTypes } from "../actions/";
import { Actions } from "../actions/";
import { combineReducers } from 'redux';


interface IFormModel {
  consentFormData: object;
  participantInfoData: object;
  surveyData: object;
}

export const initialState: IFormModel = {
  consentFormData: {},
  participantInfoData: {},
  surveyData: {},
};

const FormReducer = (state: IFormModel = initialState, action: Actions) => {


  switch (action.type) {


    case actionTypes.ADD_CON: {
      return {
        ...state,
        consentFormData: state.consentFormData
      };
    }

    case actionTypes.ADD_PAR: {
      return {
        ...state,
        consentFormData: state.participantInfoData
      };
    }


    case actionTypes.ADD_SUR: {
      return {
        ...state,
        consentFormData: state.surveyData
      };
    }


    default:
      return state;
  }
};

const rootReducer = combineReducers({
  form: FormReducer,
});//important


export default rootReducer;