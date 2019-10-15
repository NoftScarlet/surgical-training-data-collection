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
      console.log("dispatched");
      console.log(action.data);

      return {
        ...state,
        consentFormData: action.data
      }
    }

    case actionTypes.ADD_PAR: {
      console.log("dispatched");
      console.log(action.data);
      return {
        ...state,
        participantInfoData: action.data
      };
    }


    case actionTypes.ADD_SUR: {
      return {
        ...state,
        surveyData: action.data
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