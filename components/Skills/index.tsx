import React from 'react'
import Skill from './Skill'
import {
    FaAngular,
    FaBootstrap,
    FaJava,
    FaJs,
    FaLaravel,
    FaNode,
    FaPhp,
    FaPython,
    FaReact,
    FaSymfony,
    FaVuejs,
} from 'react-icons/fa'
import {DiCss3, DiDjango, DiFirebase, DiMongodb, DiMysql,} from 'react-icons/di'
import {GrGraphQl} from 'react-icons/gr'
import {
    SiAnaconda,
    SiFlask,
    SiKeras,
    SiNextDotJs,
    SiNuxtDotJs,
    SiPytorch,
    SiSocketDotIo,
    SiTensorflow,
    SiTypescript
} from 'react-icons/si'
import {GiArtificialIntelligence} from 'react-icons/gi'
import styled from 'styled-components'
import {device, primaryColor} from '../../helpers/styles'
import PerfectScroll from 'react-perfect-scrollbar'
import {motion} from 'framer-motion'
import {Title} from '../../styles/titles'
import {Btn} from '../../styles/buttons'

interface skill {
    name: string,
    icon: React.ReactElement,
    progress: number,
    categories: string[]
}

const skills: skill[] = [
    {
        name: 'Vue',
        icon: <FaVuejs/>,
        progress: 70,
        categories: ['FRONTEND', 'FRAMEWORKS/LIBRARIES'],
    },
    {
        name: 'React',
        icon: <FaReact/>,
        progress: 80,
        categories: ['FRONTEND', 'FRAMEWORKS/LIBRARIES'],
    }, {
        name: 'Socket.IO',
        icon: <SiSocketDotIo/>,
        progress: 60,
        categories: ['BACKEND', 'FRAMEWORKS/LIBRARIES'],
    },
    {
        name: 'Nuxt',
        icon: <SiNuxtDotJs/>,
        progress: 70,
        categories: ['FRONTEND', 'FRAMEWORKS/LIBRARIES']
    },
    {
        name: 'Next',
        icon: <SiNextDotJs/>,
        progress: 80,
        categories: ['FRONTEND', 'FRAMEWORKS/LIBRARIES']
    },
    {
        name: 'Angular',
        icon: <FaAngular/>,
        progress: 60,
        categories: ['FRONTEND', 'FRAMEWORKS/LIBRARIES'],
    },
    {
        name: 'Python',
        icon: <FaPython/>,
        progress: 60,
        categories: ['LANGUAGES', 'BACKEND', 'DATA SCIENCE'],
    },
    {
        name: 'Pandas',
        icon: <GiArtificialIntelligence/>,
        progress: 50,
        categories: ['DATA SCIENCE'],
    },
    {
        name: 'Pytorch',
        icon: <SiPytorch/>,
        progress: 30,
        categories: ['DATA SCIENCE'],
    },
    {
        name: 'Anaconda',
        icon: <SiAnaconda/>,
        progress: 40,
        categories: ['DATA SCIENCE'],
    },
    {
        name: 'Keras',
        icon: <SiKeras/>,
        progress: 30,
        categories: ['DATA SCIENCE'],
    },
    {
        name: 'Tensorflow',
        icon: <SiTensorflow/>,
        progress: 30,
        categories: ['DATA SCIENCE'],
    },

    {
        name: 'Java',
        icon: <FaJava/>,
        progress: 50,
        categories: ['BACKEND', 'LANGUAGES'],
    },
    {
        name: 'Php',
        icon: <FaPhp/>,
        progress: 40,
        categories: ['BACKEND', 'LANGUAGES'],
    },

    {
        name: 'Bootstrap',
        icon: <FaBootstrap/>,
        progress: 60,
        categories: ['FRONTEND', 'FRAMEWORKS/LIBRARIES'],
    },
    {
        name: 'Django',
        icon: <DiDjango/>,
        progress: 60,
        categories: ['BACKEND', 'FRAMEWORKS/LIBRARIES'],
    },
    {
        name: 'Flask',
        icon: <SiFlask/>,
        progress: 60,
        categories: ['BACKEND', 'FRAMEWORKS/LIBRARIES'],
    },
    {
        name: 'Symfony',
        icon: <FaSymfony/>,
        progress: 40,
        categories: ['BACKEND', 'FRAMEWORKS/LIBRARIES'],
    },
    {
        name: 'Laravel',
        icon: <FaLaravel/>,
        progress: 30,
        categories: ['BACKEND', 'FRAMEWORKS/LIBRARIES'],
    },
    {
        name: 'SQL',
        icon: <DiMysql/>,
        progress: 50,
        categories: ['BACKEND', 'LANGUAGES'],
    },
    {
        name: 'MongoDB',
        icon: <DiMongodb/>,
        progress: 50,
        categories: ['BACKEND', 'LANGUAGES'],
    },
    {
        name: 'Firebase',
        icon: <DiFirebase/>,
        progress: 50,
        categories: ['FRONTEND', 'FRAMEWORKS/LIBRARIES'],
    },
    {
        name: 'React Native',
        icon: <FaReact/>,
        progress: 50,
        categories: ['FRONTEND', 'FRAMEWORKS/LIBRARIES'],
    },
    {
        name: 'Node.js',
        icon: <FaNode/>,
        progress: 50,
        categories: ['BACKEND'],
    },
    {
        name: 'Javascript',
        icon: <FaJs/>,
        progress: 75,
        categories: ['FRONTEND', 'BACKEND', 'LANGUAGES'],
    },
    {
        name: 'Typescript',
        icon: <SiTypescript/>,
        progress: 70,
        categories: ['FRONTEND', 'BACKEND', 'LANGUAGES'],
    },


    {
        name: 'CSS3',
        icon: <DiCss3/>,
        progress: 80,
        categories: ['FRONTEND', 'LANGUAGES', 'UI/UX DESIGN'],
    },


    {
        name: 'GraphQL',
        icon: <GrGraphQl/>,
        progress: 70,
        categories: ['BACKEND'],
    },
]
const ops: string[] = [
    'FRONTEND',
    'BACKEND',
    'FRAMEWORKS/LIBRARIES',
    'DATA SCIENCE',
    'LANGUAGES',
]
const Skills: React.FC = () => {


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
                        My <span className='word2'> Skills</span>
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
