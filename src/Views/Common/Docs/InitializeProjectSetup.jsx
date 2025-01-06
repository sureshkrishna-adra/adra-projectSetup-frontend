import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { handleClearErrors } from 'Views/Common/Action/Common_action';
import { toast } from 'react-toastify';
import { useSize } from 'ResuableFunctions/CustomHooks';
import { Outlet } from 'react-router-dom';
import { updateIsonline, updateScreenCurrentDimension } from 'Views/Common/Slice/Common_slice';
import { decryptData, encryptData } from 'Security/Crypto/Crypto';

export const InitializeProjectSetup = () => {
    const { isOnline, Err, Toast_Type } = useSelector((state) => state.commonState);
    const sizer = useSize();
    const dispatch = useDispatch();

    //initial state
    useEffect(() => {
        dispatch(updateIsonline(navigator.onLine))
        dispatch(updateScreenCurrentDimension(sizer))
        var en = encryptData("uyhagsd")
        var de = decryptData(en)

        // console.log(en,de)        
        // dispatch(handleBearerToken(Cookies.get("token")))
    }, [])


    //error state
    useEffect(() => {
        if (Err) {
            toast(Err, {
                position: "top-right",
                type: Toast_Type,
                onOpen: () => dispatch(handleClearErrors),
                autoClose: 1600
            })
            return
        }
    }, [Toast_Type, Err, dispatch])

    window.addEventListener('online', () => {
        dispatch(updateIsonline(true))
    });

    window.addEventListener('offline', () => {
        dispatch(updateIsonline(false))
    });


    return isOnline ? <Outlet /> : <p>No internet connection</p>

}