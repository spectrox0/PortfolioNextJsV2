import {SET_LOAD, SET_ALERT} from '../actionTypes'


export const setLoading = (payload = {}) => ({
    type: SET_LOAD,
    payload,
})

export const setLoad = ({value}: { value: boolean }) => {
    return (dispatch: (action) => void) => {
        dispatch(setLoading({loading: value}))
    }
}
export const setAlert_ = (payload = {}) => ({
    type: SET_ALERT,
    payload,
})

// @ts-ignore
export const setAlert = ( props?: { message: string, type: string }) => {
    return (dispatch: (action) => void) => {
        dispatch(setAlert_({alert: props || null }))
    }
}
