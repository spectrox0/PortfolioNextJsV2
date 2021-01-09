import React from 'react'
import Form from './Form'
import styled from 'styled-components'
import { primaryColor, grayColor } from '../../helpers/styles'
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa'
import { MdPhone, MdMail } from 'react-icons/md'
import PerfectScroll from 'react-perfect-scrollbar'
import { motion } from 'framer-motion'
import {Title} from '../../styles/titles'
const ContactVariant = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.48, 0.15, 0.25, 0.96],
    },
  },
  exit: {
    opacity: 0,
  },

}
const DataContactVariant = {
  initial: {
    opacity: 0,
    x: '100%',
  },
  enter: {
    opacity: 1,
    x: '0',
    transition: {
      duration: 0.5,
      delay: 0.5,
      ease: [0.48, 0.15, 0.25, 0.96],
    },
  },
}
const ContactMe: React.FC = () => {
  return (
    <ContactS
      id="contact-me"
      animate="enter"
      initial="initial"
      exit="exit"
      variants={ContactVariant}
    >
      <PerfectScroll>
        <div className="container">
          <Title>
            <span className='word2'> Contact</span> me
          </Title>

          <div className="grid">
            <Form />
            <motion.div
              className="data-contact"
              animate="enter"
              initial="initial"
              variants={DataContactVariant}
            >
              <div className="direct-contact">
                <span>
                  <MdPhone /> +58 4241309058
                </span>
                <span>
                  <MdMail /> alejanvelazco2008@hotmail.com
                </span>
              </div>
              <div className="socialNetworks">
                <a
                  className="icon"
                  href="https://www.linkedin.com/in/alejandro-velazco-rodriguez-849785169/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="icon"
                  href="https://www.instagram.com/thebetrayerd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>

                <a
                  className="icon"
                  href="  https://github.com/spectrox0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  className="icon"
                  href="https://www.facebook.com/alejandro.velazco.14"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </PerfectScroll>
    </ContactS>
  )
}

const ContactS = styled(motion.section)`
  height: 100vh;
  color: #ffffff;
  position: absolute;
  top: 0;
  width: 100%;
  background-color: rgba(10, 10, 10, 0.2);
  left: 0;
  z-index: 6;
  transform: translate3d(0, 0, 0);
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;

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
  .container {
    overflow-x: hidden;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    position: relative;
    z-index: 10;
    padding: 2rem 1.5rem;

    .grid {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;

      @media screen and (max-width: 600px) {
        flex-direction: column;
      }
    }
    form {
      max-width: 768px;
      transform: translate3d(-100%, 0, 0);
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;

      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;

      flex-grow: 1;
      .btn {
        width: 100%;
        margin-top: 1rem;
        margin-bottom: 2rem;
      }
    }
  }
  .data-contact {
    transform: translate3d(100%, 0, 0);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-top: 1rem;
    .direct-contact {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-align: end;
      -ms-flex-align: end;
      align-items: center;
      span {
        text-transform: lowercase;
        margin: 0.5rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding-bottom: 0.3rem;
        font-size: 1em;
        border-bottom: ${grayColor} 1px solid;
        svg {
          font-size: 1.6em;
          margin-right: 0.5rem;
          color: ${primaryColor};
        }
      }
    }

    .socialNetworks {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      .icon {
        cursor: pointer;
        padding: 0.7rem;
        margin: 0.5rem;
        width: 3rem;
        height: 3rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-radius: 50%;
        border: solid 1px #fff;
        opacity: 0.8;

        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        svg {
          color: #fff;
          font-size: 1.2em;
        }
        &:hover {
          opacity: 1;
          border-color: ${primaryColor};
        }
      }
    }
  }
`
export default ContactMe;
