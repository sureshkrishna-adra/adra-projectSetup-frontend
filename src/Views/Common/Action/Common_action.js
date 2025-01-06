import axios from 'axios';
import axiosInstance from 'Services/axiosInstance';
import {
    updateModalShow,
    updateCanvasShow,
    updateCurrentNavMenuIndex,
    updateLoginCredentials,
    updateEyeFunction,

    clearError,
    resetValidation,
    updateValidation,

    loginRequest,
    loginResponse,
    updateToast,
    updateToken,
    updateRemoveToken,
    logout,

    updateResetAllMenus
} from 'Views/Common/Slice/Common_slice';


export const handleUpdateModalShow = (dispatch) => {
    dispatch(updateModalShow())
}

export const handleUpdateCanvasShow = (dispatch) => {
    dispatch(updateCanvasShow())
}

export const handleCurrentMenuInd = (menus, myCurrPath) => dispatch => {
    if (myCurrPath) {
        const ifNested = menus.filter((value) => {
            const path = value?.options?.filter((nestedValue) => {
                if (myCurrPath === nestedValue.route_name) {
                    dispatch(updateCurrentNavMenuIndex({ name: nestedValue?.name }))
                    return nestedValue
                }
            })
            if (path?.length) {
                return path
            }
        })
        if (!ifNested.length) {
            const currInd = menus.filter((v) => myCurrPath === v.route_name ? v : null)
            dispatch(updateCurrentNavMenuIndex({ name: currInd[0]?.name }))
        }
    } else {
        dispatch(updateCurrentNavMenuIndex({ name: 'Home' }))
    }
}

export const handleLoginCredentials = (data) => (dispatch) => {
    dispatch(updateLoginCredentials(data))
}

export const handleEyeFunction = () => dispatch => {
    dispatch(updateEyeFunction())
}

export const handleClearErrors = dispatch => {
    dispatch(clearError())
}

export const handleValidation = dispatch => {
    dispatch(updateValidation())
}

export const handleResetValidation = dispatch => {
    dispatch(resetValidation())
}

// login api 
export const handleLogin = (basicAuth, navigate) => async (dispatch) => {
    try {
        dispatch(loginRequest()) 
        const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/candidate_log_in`, {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${basicAuth}`,
            }
        });         

        if (data.error_code === 0) {
            dispatch(loginResponse(data))
            navigate("/dashboard/home")
        } else {
            dispatch(updateToast({ message: data?.message, type: "error" }))
        }
    } catch (err) {
        dispatch(updateToast({ message: err?.message, type: "error" }))
    }
}

export const handleBearerToken = (token) => dispatch => {
    dispatch(updateToken(token))
}

export const handleLogout = () => dispatch => {
    dispatch(logout())
}

//refresh token
export const handlerefreshToken = () => async (dispatch) => {
    try {
        const { data } = await axiosInstance.get("/refresh_token")
        if (data?.error_code === 200) {
            dispatch(updateToken(data?.data?.access_token))
        } else {
            dispatch(updateRemoveToken())
        }
    } catch (err) {
        dispatch(updateToast({ message: err?.message, type: "error" }))
    }
}

//reset all 
export const handleResetAlMenus = dispatch => {
    dispatch(updateResetAllMenus())
}