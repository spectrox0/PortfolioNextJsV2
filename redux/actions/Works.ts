import {FAILURE_GET_WORKS, GET_WORKS, SUCCESS_GET_WORKS} from '../actionTypes'
import {db} from '../../firebase.config'

export const getData = (payload = {}) => ({
  type: GET_WORKS,
  ...payload,
})

export const failureGetData = (payload = {}) => ({
  type: FAILURE_GET_WORKS,
  ...payload,
})

export const successGetData = (payload = {}) => ({
  type: SUCCESS_GET_WORKS,
  ...payload,
})
interface ParamsFetchData {
  collectionName: string
}
export const fetchData = ({collectionName} : ParamsFetchData) => {
  return (dispatch: (action) => void) => {
    dispatch(getData())
    try {
      db.collection(collectionName).onSnapshot(snapshots => {
        const arr: any[] = []
        snapshots.forEach(doc => arr.push({ ...doc.data(), id: doc.id }))
        dispatch(successGetData({ payload: { [collectionName]: arr } }))
      })
    } catch (error) {
      console.log(error)
      dispatch(failureGetData({ payload: { error: 'Error ' } }))
    }

  }
}
