import * as MyTypes from "MyTypes";
import { actionTypes } from "../actions/";

interface IFormModel {
  consentFormData: object;
  participantInfoData: object;
  surveyData: object;
  list: string[];
}

export const initialState: IFormModel = {
  consentFormData: {},
  participantInfoData: {},
  surveyData: {},
  list: ["Do the laundry", "Do the dishes"]
};

export const FormReducer = (state: IFormModel = initialState, action: MyTypes.RootAction) => {


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


    case actionTypes.DELETE: {
      const oldList = [...state.list];
      oldList.splice(action.payload, 1);
      const newList = oldList;

      return {
        ...state,
        count: state.count - 1,
        list: newList
      };
    }
    default:
      return state;
  }
};