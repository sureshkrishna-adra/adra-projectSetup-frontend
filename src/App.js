import React from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";

import Login from "Views/Common/Docs/Login";
import Error from "Views/Common/Docs/error";
import Home from "Views/Main/Docs/Home";
import { InitializeProjectSetup } from "Views/Common/Docs/InitializeProjectSetup";


const App = () => {

  return (
    <HelmetProvider>
      <ToastContainer theme='light' />
      <Routes>
        <Route element={<InitializeProjectSetup />}>
          <Route path="/" element={<Login />}>
            <Route index element={<Home />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </HelmetProvider >
  )
}
export default App;