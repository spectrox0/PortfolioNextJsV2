import {useMemo} from 'react'
import {AnyAction, applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import {CLOSE_WORK, FAILURE_GET_WORKS, GET_WORKS, OPEN_WORK, SET_LOAD, SUCCESS_GET_WORKS,} from './actionTypes'
import Work from '../models/Work'
import {Certificate} from "../models/Certificates"

interface State {
    work?: Work,
    loading: boolean,
    errorWorks: boolean,
    isOpen: false,
    works: Work[]
    certificates: Certificate[]
}

const initialState: State = {
    work: undefined,
    loading: false,
    errorWorks: false,
    isOpen: false,
    works: [],
    certificates:[]
}


const reducer = (state: State & any = initialState, action: AnyAction) => {
    switch (action.type) {
        case OPEN_WORK: {
            const { value } = action.payload
            document.body.classList.add('remove-scroll')
            return {
                ...state,
                isOpen: true,
                work: value,
            }
        }
        case CLOSE_WORK: {
            document.body.classList.remove('remove-scroll')
            return {
                ...state,
                isOpen: false,
            }
        }
        case GET_WORKS: {
            return {
                ...state,
                loading: true,
            }
        }
        case SET_LOAD: {
            return {
                ...state,
                ...action.payload
            }
        }
        case SUCCESS_GET_WORKS: {
            const data = action.payload
            return {
                ...state,
                ...data,
                loading: false,
            }
        }
        case FAILURE_GET_WORKS: {
            return {
                ...state,
                loading: false,
            }
        }
        default:
            return state
    }
}


let store: any

function initStore(preloadedState = initialState) {
    return createStore(
        reducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(thunk))
    )
}

export const initializeStore = (preloadedState: State) => {
    let _store = store ?? initStore(preloadedState)

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

export function useStore(initialState: State) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}


export default useStore
