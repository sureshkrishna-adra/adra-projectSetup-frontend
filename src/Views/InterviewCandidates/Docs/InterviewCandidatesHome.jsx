import ButtonComponent from 'Components/Button/Button';
import Checkbox from 'Components/Input/Checkbox';
import InterviewCandidatesHeader from 'Components/Panel_compnent/InterviewCandidatesHeader'
import ProgressBarComp from 'Components/Progress/ProgressBar';
import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'ResuableFunctions/CustomHooks';
import Icons from 'Utils/Icons';
import JsonData from 'Utils/JsonData'
import { handleGetQuestions, handleUpdateAnswer } from 'Views/InterviewCandidates/Action/interviewAction';
import { getQuestionFromDb, updateSelectedQuestionIndex } from 'Views/InterviewCandidates/Slice/interviewSlice';

const InterviewCandidatesHome = () => {
    const { interviewState } = useSelector((state) => state);
    const { interviewRound } = JsonData()?.jsonOnly;
    const dbRequest = indexedDB.open("questionsDatabase", 1);
    const dispatch = useDispatch()

    useEffect(() => {
        dbRequest.onupgradeneeded = function (event) {
            const db = event.target.result;
            if (!db.objectStoreNames.contains("questionsObjectStore")) {
                db.createObjectStore("questionsObjectStore", { keyPath: "id" }); // Use "id" as the key
            }
        }

        dbRequest.onsuccess = function (event) {
            const db = event.target.result;
            const transaction = db.transaction("questionsObjectStore", "readonly");
            const store = transaction.objectStore("questionsObjectStore");

            const getAllRequest = store.getAll();
            getAllRequest.onsuccess = function () {
                dispatch(getQuestionFromDb(getAllRequest.result))
            };
        };
    }, [])


    useEffect(() => {
        if (!interviewState?.isDataPresentInIndexedDb) {
            dispatch(handleGetQuestions)
        }
    }, [interviewState?.isDataPresentInIndexedDb])



    return (
        <div className='overflow-hidden'>
            <InterviewCandidatesHeader />

            <section className='main'>
                <div className="h-100 d-flex flex-wrap p-5">
                    <div className="col-3 d-flex flex-column">
                        <Card className='h-100 border-0 shadow-sm rounded-3'>
                            <Card.Header>
                                <h5 className='mb-0 py-2'>Number of Questions</h5>
                            </Card.Header>
                            <Card.Body>
                                <div className="col-12 d-flex flex-wrap">
                                    {interviewState?.generatedQuestions?.map((question, questionInd) => (
                                        <div className="col-2 my-2" key={questionInd}>
                                            <ButtonComponent
                                                className={`question_number_btn p-1 ${question?.candidate_answer ? "questions_answerd" : questionInd === interviewState?.selectedQuestionIndex ? "active" : ""}`}
                                                buttonName={questionInd + 1}
                                                clickFunction={() => dispatch(updateSelectedQuestionIndex(questionInd))}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col-7 px-2">
                        <Card className='h-100 border-0 shadow-sm rounded-3'>
                            <Card.Header>
                                <h5 className='mb-0 py-2'>Questions</h5>
                            </Card.Header>
                            <Card.Body>
                                <div className='mb-4'>
                                    <ProgressBarComp progressNow={interviewState?.answeredQuestionPercentage} animated={false} className="question-progress-bar"/>
                                </div>

                                <h5>
                                    <strong>Question No:</strong>
                                    <span>{interviewState?.selectedQuestionIndex + 1}</span>
                                </h5>
                                <p>{interviewState?.generatedQuestions[interviewState?.selectedQuestionIndex]?.question}</p>
                                <div className='w-100'>
                                    {interviewState?.generatedQuestions[interviewState?.selectedQuestionIndex]?.options?.map((val, ind) => (
                                        <div className='border p-3 my-2 rounded-2 cursor-pointer' onClick={() => document.getElementById(val + ind)?.click()}>
                                            <Checkbox
                                                formType="radio"
                                                formLabel={val}
                                                name={val}
                                                formClassName="ps-4 test_radio_btn"
                                                formId={val + ind}
                                                formName={"options"}
                                                change={() => dispatch(handleUpdateAnswer({ questionsArray: interviewState?.generatedQuestions, updationInd: interviewState?.selectedQuestionIndex, ans: val }))}
                                                formChecked={interviewState?.generatedQuestions[interviewState?.selectedQuestionIndex]?.candidate_answer === val}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </Card.Body>
                            <Card.Footer className='py-4 bg-transparent border-0 d-flex flex-wrap'>
                                <div className="col">
                                    <ButtonComponent
                                        className="btn-secondary px-5"
                                        buttonName="Previous"
                                        clickFunction={() => dispatch(updateSelectedQuestionIndex(interviewState?.selectedQuestionIndex - 1))}
                                        btnDisable={interviewState?.selectedQuestionIndex === 0}
                                    />
                                </div>
                                <div className="col text-end">
                                    <ButtonComponent
                                        className="btn-secondary px-5"
                                        buttonName="Next"
                                        clickFunction={() => dispatch(updateSelectedQuestionIndex(interviewState?.selectedQuestionIndex + 1))}
                                        btnDisable={interviewState?.generatedQuestions?.length - 1 <= interviewState?.selectedQuestionIndex}
                                    />
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>

                    <div className="col-2 d-flex flex-column">
                        <Card className='h-100 border-0 shadow-sm rounded-3'>
                            <Card.Header>
                                <h5 className='mb-0 py-2'>Rounds</h5>
                            </Card.Header>
                            <Card.Body>
                                <div className="col-12">
                                    {interviewRound?.map((round, roundInd) => (
                                        <div className="d-flex align-items-center px-2 w-100 mb-5 rounds_icon_line_relative" key={roundInd}>
                                            <div className="me-5">
                                                {Icons?.interviewRoundNonActiveIcon}
                                            </div>
                                            <div className={`col ${interviewRound?.length - 1 <= roundInd ? "rounds_icon_line_last" : "rounds_icon_line"}`}>{round}</div>
                                        </div>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default InterviewCandidatesHome