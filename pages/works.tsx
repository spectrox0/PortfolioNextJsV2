import React from 'react'
import Head from 'next/head'
import Works from '../components/Works'
import Modal from '../components/Modal'
import { CloudinaryContext } from 'cloudinary-react'
import Loading from '../components/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { fetchWorks } from '../redux/actions/Works'
import { AnimatePresence } from 'framer-motion'
import { Console } from 'console'
export default function WorksPage() {
  const dispatch = useDispatch()
  const { works, loadingWorks } = useSelector(state => ({
    ...state,
  }))

  React.useEffect(() => {
    if (!works) {
      dispatch(fetchWorks())
    } else if (!works.length) {
      dispatch(fetchWorks())
    }
  }, [])
  console.log(works)
  return (
    <CloudinaryContext cloudName="dh4qxznuz">
      <Head>
        <title>Portfolio VeaSystem</title>
      </Head>
      {works && <Works works={works} />}
      <AnimatePresence>{loadingWorks && <Loading />}</AnimatePresence>
      <Modal />
    </CloudinaryContext>
  )
}
