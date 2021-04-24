import {SUCCESS_GET_DATA_FIREBASE} from '../actionTypes'
import {db} from '../../firebase.config'
import {setAlert, setLoading} from "./global";


export const successGetData = (payload = {}) => ({
    type: SUCCESS_GET_DATA_FIREBASE,
    payload,
})

interface ParamsFetchData {
    collectionName: string
}

export const fetchDataFirebase = ({collectionName}: ParamsFetchData) => {
    return (dispatch: (action) => void) => {
        dispatch(setLoading({loading: true}))
        try {
            db.collection(collectionName).onSnapshot(snapshots => {
                const arr: any[] = []
                snapshots.forEach(doc => arr.push({...doc.data(), id: doc.id}))
                dispatch(successGetData({payload: {[collectionName]: arr}}))
            })
            dispatch(setLoading({loading: true}))
        } catch (error) {
            dispatch(setLoading({loading: false}))
            dispatch(setAlert({message: "An Error ocurred when you try connect to database", type: "error"}))
        }

    }
}
