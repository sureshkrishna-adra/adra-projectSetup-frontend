import React, { Fragment, useEffect } from 'react'
import { Outlet } from 'react-router-dom';

import { CustomUseLocationHook, useCustomNavigate, useDispatch } from 'ResuableFunctions/CustomHooks';
import { handleCurrentMenuInd, handleUpdateCanvasShow } from 'Views/Common/Action/Common_action';
import Header from 'Components/Panel_compnent/Header';
import Sidebar from 'Components/Panel_compnent/Sidebar';
import store from 'StoreIndex';
import JsonData from 'Utils/JsonData';
import Images from 'Utils/Image';
import { OverallModel } from 'ResuableFunctions/OverallModal';

const Layout = () => {
    const state = store.getState()
    const dispatch = useDispatch();
    const navigate = useCustomNavigate();
    const location = CustomUseLocationHook();
    const handleCanvasOpenOrClose = () => dispatch(handleUpdateCanvasShow)
    const menuOptions = JsonData()?.jsonOnly?.sidebarMenus;

    // useEffect(() => {
    //     if (state?.commonState?.innerWidth >= 1200 && state?.commonState?.canvasShow) {
    //         dispatch(handleUpdateCanvasShow)
    //     }

    //     dispatch(handleCurrentMenuInd(menuOptions, location[location.length - 1]))
    // }, [state?.commonState?.innerWidth])

    // useEffect(() => {
    //     if (!state?.commonState?.user_id) {
    //         navigate("/")
    //     }
    // }, [state?.commonState?.user_id])


    return (
        <Fragment>
            <main className="w-100">
                {/* header  */}
                <header className='w-100'>
                    <Header
                        offcanvasOn={"xl"}
                        offcanvasOnButton={handleCanvasOpenOrClose}
                    />
                </header>

                {/* main content  */}
                <div className="w-100">
                    <Outlet />
                </div>
            </main>
            <OverallModel />
        </Fragment>
    )
}

export default Layout