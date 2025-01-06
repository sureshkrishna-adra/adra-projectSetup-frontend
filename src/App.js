import React from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";

import Login from "Views/Common/Docs/Login";
import Error from "Views/Common/Docs/error";
import { InitializeProjectSetup } from "Views/Common/Docs/InitializeProjectSetup";
import InterviewCandidatesRegistration from "Views/InterviewCandidates/Docs/InterviewCandidatesRegistration";
import InterviewCandidatesHome from "Views/InterviewCandidates/Docs/InterviewCandidatesHome";
import InterviewCandidatesAuth from "Views/InterviewCandidates/Docs/InterviewCandidatesAuth";


const App = () => {

  return (
    <HelmetProvider>
      <ToastContainer theme='light' />
      <Routes>
        <Route element={<InitializeProjectSetup />}>
          <Route path="/" element={<Login />} />
          <Route path="candidates_registration" element={<InterviewCandidatesRegistration />} />

          {/* interview candidates Views */}
          <Route path="candidates_home" element={<InterviewCandidatesAuth />}>
            <Route index element={<InterviewCandidatesHome />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </HelmetProvider >
  )
}
export default App;