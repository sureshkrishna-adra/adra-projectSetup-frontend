import axiosInstance from "Services/axiosInstance";
import { handleValidation } from "Views/Common/Action/Common_action";
import {
    updateCandidateData,
    registerCandidateRequest,
    registerCandidateResponse,
    registerCandidateFailure,


} from "Views/InterviewCandidates/Slice/interviewSlice";

//                                                                               candidate registration on change 
export const handleInterviewRegistrationOnChange = ipVal => dispatch => {
    dispatch(updateCandidateData(ipVal))
}

//                                                                               candidate registration endpoint
export const handleRegisterCandidate = params => async (dispatch) => {
    if (params?.candidateData?.name && params?.candidateData?.age && params?.candidateData?.phoneNumber && params?.candidateData?.email &&
        params?.candidateData?.gender && params?.candidateData?.address && params?.candidateData?.parentName && params?.candidateData?.parentOccupation &&
        params?.candidateData?.maritalStatus && params?.candidateData?.siblings && params?.candidateData?.addressIfAnyCbe && params?.candidateData?.sslcSchoolName &&
        params?.candidateData?.sslcMarks && params?.candidateData?.hscSchoolName && params?.candidateData?.hscMarks && params?.candidateData?.collegeName &&
        params?.candidateData?.collegeMarks && params?.candidateData?.experience && params?.candidateData?.canditateRole && params?.candidateData?.expectedSalary &&
        params?.candidateData?.currentSalary) {

        if (params?.candidateData?.maritalStatus === "Married" || params?.candidateData?.experience === "experienced") {
            if (params?.candidateData?.maritalStatus === "Married" && !params?.candidateData?.childrens) {
                dispatch(handleValidation)
                return
            }

            if (params?.candidateData?.experience === "experienced" && !params?.candidateData?.previousCompanyName && !params?.candidateData?.designation && !params?.candidateData?.canditateExpType) {
                dispatch(handleValidation)
                return
            }

            dispatch(registerCandidateCall(params?.candidateData))
        } else {
            dispatch(registerCandidateCall(params?.candidateData))
        }
    } else {
        dispatch(handleValidation)
    }
}
const registerCandidateCall = params => async (dispatch) => {
    console.log(params)
    try {
        dispatch(registerCandidateRequest())
        const { data } = await axiosInstance.post("/register_candidate", params)

        if (data?.error_code === 0) {
            dispatch(registerCandidateResponse(data?.data))
        } else {
            dispatch(registerCandidateFailure(data?.message))
        }

    } catch (Err) {
        dispatch(registerCandidateFailure(Err?.message))
    }
}