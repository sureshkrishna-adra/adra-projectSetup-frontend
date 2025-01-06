import React from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";

import Login from "Views/Common/Docs/Login";
import Error from "Views/Common/Docs/error";
import { InitializeProjectSetup } from "Views/Common/Docs/InitializeProjectSetup";
import InterviewCandidatesHeader from "Components/Panel_compnent/InterviewCandidatesHeader";
import InterviewCandidatesIndex from "Views/InterviewCandidates/Docs/InterviewCandidatesIndex";
import InterviewCandidatesRegistration from "Views/InterviewCandidates/Docs/InterviewCandidatesRegistration";


const App = () => {

  return (
    <HelmetProvider>
      <ToastContainer theme='light' />
      <Routes>
        <Route element={<InitializeProjectSetup />}>
          <Route path="/" element={<Login />} />
          <Route path="candidates_registration" element={<InterviewCandidatesRegistration />} />

          {/* interview candidates Views */}
          <Route path="/interview_candidate" element={<InterviewCandidatesHeader />}>
            <Route index element={<InterviewCandidatesIndex />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </HelmetProvider >
  )
}
export default App;