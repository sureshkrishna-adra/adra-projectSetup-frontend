import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { handleClearErrors } from 'Views/Common/Action/Common_action';
import { toast } from 'react-toastify';
import { useSize } from 'ResuableFunctions/CustomHooks';
import { Outlet } from 'react-router-dom';
import { updateIsonline, updateScreenCurrentDimension } from 'Views/Common/Slice/Common_slice';
import { OverallModel } from 'ResuableFunctions/OverallModal';

export const InitializeProjectSetup = () => {
    const { commonState, interviewState } = useSelector((state) => state);
    const sizer = useSize();
    const dispatch = useDispatch();

    //initial state
    useEffect(() => {
        dispatch(updateIsonline(navigator.onLine))
        dispatch(updateScreenCurrentDimension(sizer))
        // dispatch(handleBearerToken(Cookies.get("token")))
    }, [])

    //error state
    useEffect(() => {
        if (commonState?.Err) {
            toast(commonState?.Err, {
                position: "top-right",
                type: commonState?.Toast_Type,
                onOpen: () => dispatch(handleClearErrors),
                autoClose: 1600
            })
            return
        }
    }, [commonState?.Toast_Type, commonState?.Err, dispatch])

    //Online or Offline
    window.addEventListener('online', () => {
        dispatch(updateIsonline(true))
    });
    window.addEventListener('offline', () => {
        dispatch(updateIsonline(false))
    });

    return commonState?.isOnline ?
        <Fragment>
            <Outlet />

            <OverallModel />
        </Fragment>
        :
        <p>No internet connection</p>
}