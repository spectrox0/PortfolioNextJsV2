import React from 'react'
import Head from 'next/head'
import {Modal} from '@/organism/Modal/Work'
import {WorksTemplate} from "../components/templates/Works";
import {CloudinaryContext} from 'cloudinary-react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchData} from '../redux/actions/Works'
import {cloudName} from "../utils/config";

const WorksPage: React.FC = () => {
    const dispatch = useDispatch()
    const {works} = useSelector(state => ({
        ...state,
    }))

    React.useEffect(() => {
        if (!works) {
            dispatch(fetchData({collectionName: 'works'}))
        } else if (!works.length) {
            dispatch(fetchData({collectionName: 'works'}))
        }
    }, [])
    return (
        <CloudinaryContext cloudName={cloudName}>
            <Head>
                <title>Portfolio VeaSystem</title>
            </Head>
            {works && <WorksTemplate works={works}/>}
            <Modal/>
        </CloudinaryContext>
    )
}
export default WorksPage
