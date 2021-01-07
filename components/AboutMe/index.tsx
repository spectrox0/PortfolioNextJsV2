import React from 'react'
import styled, { keyframes } from 'styled-components'
import { primaryColor } from '../../helpers/styles'
import {
  AiOutlineMobile,
  AiOutlineDesktop,
  AiOutlineClockCircle,
} from 'react-icons/ai'
import { FaUniversity, FaBusinessTime } from 'react-icons/fa'
import data from '../../data/about.json'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { motion } from 'framer-motion'
import Image, { ImageProps } from 'next/image'

const options: string[] = ['Education', 'Experience', 'Interests']
export default function AboutMe() {
  const [op, setOp] = React.useState<number>(0)
  const [imageLoad, setImage] = React.useState<boolean>(false)

  return (
    <AboutMeStyle
      id="about-me"
      animate="enter"
      initial="initial"
      exit="exit"
      variants={AboutMeVariant}
      transition={{ duration: 0.5 }}
    >
      <PerfectScrollbar>
        <div className="container container-about">
          <div className="row">
            {data && (
              <>
                <div className={`img ${imageLoad ? 'active' : ''}`}>
                  <Image
                    alt="alejandro velazco"
                    onLoad={() => setImage(true)}
                    src='/images/alejandro velazco.jpg'
                    width={500}
                    height={500}
                  />
                </div>

                <div className="biography">
                  <h2>
                    <span>About </span> me
                  </h2>
                  <p>{data.text}</p>
                  <div className="options">
                    {options.map((item, i) => (
                      <span
                        key={item}
                        className={`option ${op == i ? 'active' : ''} `}
                        onClick={() => setOp(i)}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="item-list">
                    <ul className={`${op == 0 ? 'active' : ''}`}>
                      <li>
                        <span className="title">Systems Engineer </span>
                        <div className="details-wrapper">
                          <FaUniversity />
                          <p className="details">2016 - 2020 | UNIMET</p>
                        </div>
                      </li>
                    </ul>

                    <ul className={`${op == 1 ? 'active' : ''}`}>
                      <li>
                        <span className="title"> FullStack Developer </span>
                        <div className="details-wrapper">
                          <FaBusinessTime />
                          <p className="details">
                            2019 - 2020 | Global Ratings
                          </p>
                        </div>
                      </li>
                      <li>
                        <span className="title"> Frontend Developer </span>
                        <div className="details-wrapper">
                          <FaBusinessTime />
                          <p className="details">2020 | Wepa.es </p>
                        </div>
                      </li>
                      <li>
                        <span className="title"> FullStack Developer </span>
                        <div className="details-wrapper">
                          <FaBusinessTime />
                          <p className="details">2020 - Present | EasyMGT</p>
                        </div>
                      </li>
                      <li>
                        <span className="title"> Frontend Developer </span>
                        <div className="details-wrapper">
                          <FaBusinessTime />
                          <p className="details">
                            2020 - Present | TowerHouseStudio
                          </p>
                        </div>
                      </li>
                    </ul>

                    <ul className={`${op == 2 ? 'active' : ''}`}>
                      <li>
                        <span className="title"> Backend </span>
                        <p>
                          Server Side , Node.js , Django, Flask ,Laravel,Symfony
                          ,GraphQL, SQL and MongoDB
                        </p>
                      </li>
                      <li>
                        <span className="title"> Frontend </span>
                        <p>
                          Client Side , Vue.js, Angular +2 and React.js and
                          React Native
                        </p>
                      </li>
                      <li>
                        <span className="title">Machine Learning</span>
                        <p>Machine Learning and AI with Python</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="services">
          <div className="item">
            <AiOutlineDesktop />
            <span> Web Development </span>
            <p> Complete development of websites.</p>
          </div>

          <div className="item">
            <AiOutlineClockCircle />
            <span> Fast Delivery </span>
            <p>fast application development with punctual delivery times</p>
          </div>
          <div className="item">
            <AiOutlineMobile />
            <span> App Development </span>
            <p> Development of mobile and desktop applications </p>
          </div>
        </div>
      </PerfectScrollbar>
    </AboutMeStyle>
  )
}

const AboutMeVariant = {
  initial: {
    x: '100%',
  },
  enter: {
    x: '0',
    transition: {
      duration: 0.5,
      ease: [0.48, 0.15, 0.25, 0.96],
    },
  },
  exit: {
    x: '100%',
  },
}
const InputAnimationImg = keyframes`
from {
  opacity:0;
  transform: translate3d(0, 0, 0) rotate(225deg) scale(0)
}
to {
  opacity:1;
  transform: translate3d(0, 0, 0) rotate(225deg) scale(1)
}
`
const AboutMeStyle = styled(motion.section)`
  color: #fff;
  width: 100%;
  position: absolute;
  background-color: rgba(10, 10, 10, 0.7);
  top: 0;
  left: 0;
  z-index: 6;
  height: 100%;
  transform: translate3d(0, 0, 0);
  padding: 0;

  p {
    margin: 0;
    font-style: italic;
    font-size: 1.2em;
    text-align: center;
    padding: 1rem;
  }

  .options {
    padding: 0.5rem;
    span {
      padding: 0.3rem 0.5rem;
      border-bottom: solid #fff 1px;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      cursor: pointer;
      font-weight: 600;
      &:hover {
        opacity: 0.8;
      }
      &.active {
        color: ${primaryColor};
        border-color: ${primaryColor};
      }
    }
  }
  .services {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    background: rgba(10, 10, 10, 0.8);
    border-top: solid 1px rgba(255, 255, 255, 0.5);
    border-bottom: solid 1px rgba(255, 255, 255, 0.5);
    .item {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      padding: 1.2em 0.8em;

      svg {
        font-size: 3em;
        color: ${primaryColor};
      }
      span {
        text-align: center;
        font-size: 1.5em;
      }
      p {
        text-align: center;
        margin: 0;
        padding: 0;
        font-size: 0.9em;
      }
    }
  }

  .item-list {
    width: 100%;
    height: 10rem;
    .details-wrapper {
      display: flex;
      padding: 0.3rem 0.5rem;
      align-items: center;
      p {
        margin: 0;
        padding: 0;
      }
    }

    svg {
      margin: 0.3em;
      font-size: 2em;
      color: ${primaryColor};
    }
    .title {
      text-align: left;
      font-weight: 500;
      font-size: 1.5em;
      color: #fff;
      text-transform: capitalize;
    }
    margin: 0.4em;
  }
  .item-list {
    overflow: hidden;
    position: relative;
    overflow: auto;
    display: flex;
    justify-content: center;
    &::-webkit-scrollbar {
      width: 0.7em;
      height: 1em;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
      border: solid 1px rgb(240, 240, 240);
      &:hover {
        border-color: ${primaryColor};
      }
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
      position: fixed;
      border-left: solid 1px rgb(240, 240, 240);
    }
    ul {
      transform: rotateY(-90deg);
      transition: all 0.5s ease-in-out;
      opacity: 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 0;
      margin: 0;
      &.active {
        opacity: 1;
        transform: rotateY(0);
      }
      position: absolute;
      top: 0;

      li {
        list-style: none;
        border: solid 1px rgba(255, 255, 255, 0.5);
        background: rgba(10, 10, 10, 0.8);
        margin: 0.5em;
        padding: 0.5em;
      }
    }
  }

  .container {
    padding: 2rem 1.5rem;
    .row {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  .img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 30rem;
    overflow: hidden;
    margin: 1rem;
    padding: 1rem;
    position: relative;
    transform: translate3d(0, 0, 0);
    &:after {
      content: '';
      display: block;
      border-radius: 50%;
      position: absolute;
      top: 0;
      opacity: 0;
      left: 0;
      z-index:-1;
      width: 100%;
      height: 100%;
      border: 1px solid transparent;
      transform: translate3d(0, 0, 0) rotate(225deg) scale(0);
      border-left-color: ${primaryColor};
      border-right-color: ${primaryColor};
    }
    &.active {
      &:after {
        animation: ${InputAnimationImg} 0.8s ease-in-out 0.3s forwards;
      }
    }
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: 50%;
    &:nth-child(2) {
      position: absolute;
      padding: 1rem;
      top: 0;
      left: 0;
    }
  }
  .biography {
    display: flex;
    flex-direction: column;
    flex: 1;
    flex-basis: 50%;
    align-items: center;
    justify-content: center;
    height: auto;
    min-width: 20rem;
    padding: 1rem;

    h2 {
      font-size: 2.5em;
      margin: 0;
      letter-spacing: 0.15em;
      font-size: 2.5em;
      text-transform: uppercase;
      font-weight: 400;

      span {
        font-weight: 700;
        color: ${primaryColor};
      }
    }
  }
`