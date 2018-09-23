import {ADD_QUESTION, RECEIVE_QUESTIONS} from "./types";
import {saveQuestion, saveQuestionAnswer} from "../utils/api"
import {handleInitialData} from "./shared";


export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }

}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const {authedUser} = getState()
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
            .then(() => {
                dispatch(handleInitialData())
            })
    }
}

export function handleAnswerQuestion(qid, answer) {
    return (dispatch, getState) => {
        const authedUser = getState().authedUser[0]
        return saveQuestionAnswer(authedUser, qid, answer)
            .then(() => {
                dispatch(handleInitialData())
            })
    }

}