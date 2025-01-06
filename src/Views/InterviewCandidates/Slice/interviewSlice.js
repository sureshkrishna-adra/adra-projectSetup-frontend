import { createSlice } from "@reduxjs/toolkit";

const interviewSlice = createSlice({
    name: "Interview_slice",
    initialState: {
        candidateData: {},
        buttonSpinner: false,
        initialGlow: false,
        generatedQuestions: [],
        isDataPresentInIndexedDb: true,
        selectedQuestionIndex: 0,
        answeredQuestionPercentage: 0
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
        getQuestionFromDb(state, action) {
            const answeredQues = action.payload?.filter((v) => v?.candidate_answer !== '')

            return {
                ...state,
                generatedQuestions: action.payload,
                isDataPresentInIndexedDb: action.payload?.length ? true : false,
                answeredQuestionPercentage: answeredQues?.length / action.payload?.length * 100
            }
        },

        //Register candidates
        registerCandidateRequest(state, action) {
            return {
                ...state,
                buttonSpinner: true
            }
        },
        registerCandidateResponse(state, action) {
            return {
                ...state,
                buttonSpinner: false,
                // candidateData:{}
            }
        },
        registerCandidateFailure(state, action) {
            return {
                ...state,
                buttonSpinner: false
            }
        },


        //Get Generated Questions
        getQuestionsRequest(state, action) {
            return {
                ...state,
                initialGlow: true
            }
        },
        getQuestionsResponse(state, action) {
            const dbRequest = indexedDB.open("questionsDatabase", 1);
            dbRequest.onsuccess = function (event) {
                const db = event.target.result;
                const transaction = db.transaction("questionsObjectStore", "readwrite");
                const store = transaction.objectStore("questionsObjectStore");
                const objects = action?.payload[0]?.assigned_questions;

                objects.forEach((obj, ind) => store.put({ ...obj, id: ind })); // Add or update objects
                transaction.oncomplete = () => console.log("Objects added successfully!");
            };

            return {
                ...state,
                generatedQuestions: action?.payload[0]?.assigned_questions || [],
                initialGlow: false
            }
        },
        getQuestionsFailure(state, action) {
            return {
                ...state,
                initialGlow: false
            }
        },


        updateSelectedQuestionIndex(state, action) {
            return {
                ...state,
                selectedQuestionIndex: action.payload
            }
        },
        updateAnswers(state, action) {
            const answeredQues = action.payload?.filter((v) => v?.candidate_answer !== '')

            return {
                ...state,
                generatedQuestions: action.payload,
                answeredQuestionPercentage: answeredQues?.length / action.payload?.length * 100
            }
        }
    }
})


export const { actions, reducer } = interviewSlice;

export const {
    updateCandidateData,
    getQuestionFromDb,
    registerCandidateRequest,
    registerCandidateResponse,
    registerCandidateFailure,
    getQuestionsRequest,
    getQuestionsResponse,
    getQuestionsFailure,
    updateSelectedQuestionIndex,
    updateAnswers

} = actions;

export default reducer