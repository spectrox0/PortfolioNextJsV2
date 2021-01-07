import React from 'react'
import styled from 'styled-components'
import { device } from '../../../helpers/styles'
import { Image, Transformation } from 'cloudinary-react'
import { motion } from 'framer-motion'
interface Props {
  title: string
  img: string
  images: string[]
  categories: string[]
  content: string
  category: string
  height: number
  openModal: ({ }: object) => void
  link: string
  date: number
}
interface PropsStyled {
  height: number
}
export default function Work({
  title,
  img,
  images,
  categories,
  content,
  date,
  height,
  openModal,
  link,
}: Props) {
  const [isLoad, setLoad] = React.useState<boolean>(false)
  const imgRef = React.useRef<HTMLImageElement>()
  React.useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setLoad(true)
    }
  }, [])
  return (
    <WorkStyles
      height={height}
      initial="initial"
      animate="enter"
      variants={WorkVariant}
      onClick={() =>
        openModal({ title, img, images, content, categories, date, link })
      }
    >
      <figure className="img-work">
        <div className={`img ${isLoad ? 'active' : ''}`}>
          <Image
            ref={imgRef}
            loading="lazy"
            alt="work-current"
            publicId={`${img}.webp`}
          >
            <Transformation quality="auto" />
          </Image>
        </div>
        <div className="title">
          <h3>{title}</h3>
        </div>
      </figure>
    </WorkStyles>
  )
}

const WorkVariant = {
  initial: {
    opacity: 0,
    originX: 0.5,
    originY: 0.5,
    scale: 0.4,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 0.4,
      ease: 'linear',
    },
  },
}
const WorkStyles = styled(motion.span) <PropsStyled>`
  z-index: 2;
  color: #ffffff;
  background: transparent;
  border-radius: 0;
  cursor: pointer;
  align-items: center;
  width: 100%;
  display: flex;
  align-items: center;
  transform: translate3d(0px, 0px, 0px);
  height: ${props => props.height}px;
  overflow: hidden;

  @media ${device.mobileM} {
    height: ${props => props.height * 0.8}px;
  }
  transform-origin: center center !important;
  opacity: 1;
  position: relative;
  .img-work {
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;

    .img {
      width: 100%;
      height: 100%;
      transform: translate3d(0, 0, 0);
      transition: all linear 0.3s;
      position: relative;
      z-index: 2;
      &.active {
        .blur-image {
          display: none;
        }
      }
    }

    img {
      &:nth-child(2) {
        position: absolute;
        top: 0;
        left: 0;
      }

      width: 100%;
      object-fit: cover;
      object-position: center center;
      min-height: 100%;
    }
  }
  position: relative;
  overflow: hidden;

  .title {
    padding: 1rem 0.2rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    opacity: 0;
    z-index: 4;
    height: 100%;
    width: 100%;
    transition: all ease-in-out 0.3s;
    background-color: rgba(0, 0, 0, 0.2);
    border: solid 1px rgba(255, 255, 255, 0.3);
    h3 {
      display: flex;
      font-weight: 500;
      font-size: 1.3em;
      position: relative;
      text-transform: uppercase;
      padding: 1.5rem 1rem;
      margin: 0;
      max-width: 70%;
      text-align: center;
      align-items: center;
      flex-direction: column;
      border: solid 1px rgba(255, 255, 255, 0.3);
    }
  }
  &:hover {
    .img {
      transform: scale3d(1.15, 1.15, 1);
      opacity: 0.3;
    }
    h3 {
    }
    .title {
      opacity: 1;
    }
  }
`
