import { createSlice } from "@reduxjs/toolkit";

const interviewSlice = createSlice({
    name: "Interview_slice",
    initialState: {
        candidateData: {},
        buttonSpinner: false
    },
    reducers: {
        updateCandidateData(state, action) {
            let registrationDetails = { ...state.candidateData, ...action.payload }

            if (Object.keys(action.payload)[0] === "maritalStatus") {
                registrationDetails.childrens = ""
            }

            if (Object.keys(action.payload)[0] === "experience") {
                registrationDetails.previousCompanyName = ""
                registrationDetails.designation = ""
                registrationDetails.canditateExpType = ""
            }

            return {
                ...state,
                candidateData: registrationDetails
            }
        },

        registerCandidateRequest(state, action) {
            return {
                ...state,
                buttonSpinner: true
            }
        },
        registerCandidateResponse(state, action) {
            return {
                ...state,
                buttonSpinner: false
            }
        },
        registerCandidateFailure(state, action) {
            return {
                ...state,
                buttonSpinner: false
            }
        }
    }
})


export const { actions, reducer } = interviewSlice;

export const {
    updateCandidateData,
    registerCandidateRequest,
    registerCandidateResponse,
    registerCandidateFailure,

} = actions;

export default reducer