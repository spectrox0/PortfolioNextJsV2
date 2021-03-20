import React from 'react'
import Skill from './Skill'
import styled from 'styled-components'
import {device, primaryColor} from '../../helpers/styles'
import PerfectScroll from 'react-perfect-scrollbar'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {motion} from 'framer-motion'
import {Title} from '../../styles/titles'
import {Btn} from '../../styles/buttons'
import {ops, skills} from '../../helpers/constants'
import {useIntl} from "react-intl";

const Skills: React.FC = ():JSX.Element => {
    const {formatMessage : t} = useIntl()
    const [currentOp, setCurrentOp] = React.useState<number>(0)
    const SkillVariant = {
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
    return (
        <SkillS
            id="skills"
            animate="enter"
            initial="initial"
            exit="exit"
            variants={SkillVariant}
            transition={{duration: 0.5}}
        >
            <PerfectScroll>
                <div className="container">
                    <Title>
                        {t({id:'my'})} <span className='word2'> {t({id:'skills'})}</span>
                    </Title>
                    <div className="wrappers">
                        <div className="switch">
                            {ops.map((item, i) => (
                                <Btn
                                    key={item}
                                    flexGrow={1}
                                    className={i == currentOp ? 'active' : ''}
                                    onClick={() => setCurrentOp(i)}
                                >
                                    {item}
                                </Btn>
                            ))}
                        </div>
                        <div className="col-skills">
                            <div className="skills-container">
                                {skills
                                    .filter(skill => skill.categories.includes(ops[currentOp]))
                                    .map((props, index) => (
                                        <Skill delay={0.5 * index} {...props} key={props.name}/>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </PerfectScroll>
        </SkillS>
    )
}

const SkillS = styled(motion.section)`
  color: white;
  overflow: hidden;
  height: 100%;
  position: absolute;
  top: 0;
  padding: 0;
  left: 0;
  z-index: 6;
  width: 100%;
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
    flex: 1;
    padding: 2rem 1.5rem;
    position: relative;
    z-index: 4;

    h2 {
      letter-spacing: 0.15em;
      font-size: 2.5em;
      flex: 1;
      color: #fff;
      text-transform: uppercase;

      font-weight: 300;
      margin-bottom: 1rem;

      span {
        font-weight: 500;
        color: ${primaryColor};
      }
    }

    .wrappers {
      display: flex;
      flex: 1;

      button {
        width: 100%;
      }

      @media (max-width: 992px) {
        flex-direction: column;
        .switch {
          display: flex;
          flex-wrap: wrap;

          button {
            width: auto;
          }

          width: auto;
        }
      }
    }

    .switch {
      flex-basis: 35%;
      margin: 1rem 0;
      margin-bottom: 2rem;
      position: relative;

    }

    .col-skills {
      flex: 1;
    }

    .skills-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 2rem;
      @media ${device.tablet} {
        grid-template-columns: repeat(2, 1fr);
      }
      @media ${device.mobileL} {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`

export default Skills;
