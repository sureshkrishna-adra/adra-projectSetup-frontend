import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "ResuableFunctions/CustomHooks";
import { handleGetQuestions } from "Views/InterviewCandidates/Action/interviewAction";

export function QuestionsDb() {
    const { interviewState } = useSelector((state) => state);
    const dbRef = useRef(null);
    const dispatch = useDispatch();

    // Initialize the database and store the reference in useRef
    useEffect(() => {
        const dbRequest = indexedDB.open("MyDatabase", 1);

        dbRequest.onupgradeneeded = function (event) {
            const db = event.target.result;
            if (!db.objectStoreNames.contains("questionsObjectStore")) {
                db.createObjectStore("questionsObjectStore", { keyPath: "id" });
            }
        };

        dbRequest.onsuccess = function (event) {
            dbRef.current = event.target.result; // Store the DB reference
            const transaction = dbRef.current.transaction("questionsObjectStore", "readonly");
            const store = transaction.objectStore("questionsObjectStore");

            const getAllRequest = store.getAll();
            getAllRequest.onsuccess = function () {
                console.log("All objects:", getAllRequest.result);
            };
        };

        dbRequest.onerror = function (event) {
            console.error("Database error:", event.target.error);
        };

        // Dispatch action to fetch questions
        dispatch(handleGetQuestions());
    }, []);

    // Update questions in the database when interviewState.generatedQuestions changes
    useEffect(() => {
        if (!dbRef.current || !interviewState?.generatedQuestions) return;

        const transaction = dbRef.current.transaction("questionsObjectStore", "readwrite");
        const store = transaction.objectStore("questionsObjectStore");

        interviewState.generatedQuestions.forEach((obj, ind) => {
            store.put({ ...obj, id: ind }); // Add or update objects
        });

        transaction.oncomplete = () => {
            console.log("Objects added successfully!");
        };

        transaction.onerror = (event) => {
            console.error("Transaction error:", event.target.error);
        };
    }, [interviewState?.generatedQuestions]);

};
