import {ContactInfo} from "../../models/Contact"
import {setAlert, setLoading} from "./global";
import axios from "axios";


export const sendMail = ({email, subject, message, name}: ContactInfo) => {
    return (dispatch: (action) => void): Promise<any> => {
        dispatch(setLoading({loading: true}))
        return axios.post("/api/contact", {email, subject, message, name}).then((res) => {
            dispatch(setLoading({loading: false}))
            if(res) dispatch(setAlert({ message:'mail send success' , type:"success"}))
        }).catch(err => {
            dispatch(setLoading({loading: false}))
            dispatch(setAlert({ message:'mail send failed' , type:"error"}))
            console.log(err)
        })
    }

}
