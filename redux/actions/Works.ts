import { GET_WORKS, SUCCESS_GET_WORKS, FAILURE_GET_WORKS } from '../actionTypes'
import { db } from '../../firebase.config'
import Work from "../../models/Work"
export const getWorks = (payload?: object) => ({
  type: GET_WORKS,
  ...payload,
})

export const failureGetWorks = (payload: object = {}) => ({
  type: FAILURE_GET_WORKS,
  ...payload,
})

export const successGetWorks = (payload: object = {}) => ({
  type: SUCCESS_GET_WORKS,
  ...payload,
})

export const fetchWorks = () => {
  return (dispatch: Function) => {
    dispatch(getWorks())
    try {
      db.collection('works').onSnapshot(snapshots => {
        const works: Work[] = []
        snapshots.forEach(doc => works.push({ ...doc.data(), id: doc.id } as Work))
        dispatch(successGetWorks({ payload: { works } }))
      })
    } catch (error) {
      console.log(error)
      dispatch(failureGetWorks({ payload: { error: 'Error ' } }))
    }

    /* axios
      .get('https://django-api-portfolio.herokuapp.com/api/works/')
      .then(({ data }) => {
        dispatch(successGetWorks({ payload: { works: data } }))
      })
      .catch(error => {
        dispatch(failureGetWorks({ payload: { error: 'Error ' } }))
      })*/
  }
}
