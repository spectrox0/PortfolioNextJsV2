import React from 'react'
import Work from './Work'
import styled from 'styled-components'
import { primaryColor } from '../../helpers/styles'
import StackGrid, { transitions } from 'react-stack-grid'
import { useDispatch, useSelector } from 'react-redux'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { motion } from 'framer-motion'
import WorkModel from '../../models/Work'
import {Title} from '../../styles/titles'
import {Btn} from '../../styles/buttons'
interface Props {
  works: WorkModel[]
}
interface PropsStyled {
  isOpen: boolean
}

export default function Works({ works }: Props) {
  const { scaleDown } = transitions
  const ops: string[] = ['ALL', 'VUE', 'ANGULAR', 'REACT', 'PWA', 'NODEJS']
  const [currentOp, setCurrentOp] = React.useState<number>(0)
  const [width, setWidth] = React.useState<number>()
  const { isOpen } = useSelector(state => ({
    ...state
  }))

  const workss = () => {
    return works.filter(work =>
      currentOp
        ? work.categories
          .map(e => e.toLocaleUpperCase())
          .includes(ops[currentOp])
        : works
    )
  }
  const dispatch = useDispatch()
  const openModal = work => {
    dispatch({
      type: 'OPEN_WORK',
      payload: {
        value: work,
      },
    })
  }
  const [more, setMore] = React.useState<boolean>(false)

  React.useEffect(() => {
    setWidth(window.innerWidth)
    const handlingSize = () => {
      setWidth(window.innerWidth)
    }
    addEventListener('resize', handlingSize)
    return () => removeEventListener('resize', handlingSize)
  })
  const WorkVariant = {
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
    <WorksS
      id="works"
      isOpen={isOpen}
      animate="enter"
      initial="initial"
      exit="exit"
      variants={WorkVariant}
      transition={{ duration: 0.5 }}
    >
      <PerfectScrollbar>
        <div className="container">
          <Title textAlign='center' fontWeight={700} color={primaryColor} margin={"2rem 0"}>
            Works <span className='shadow'> Works</span>
          </Title>
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

          <div className="grid">
            {width && (
              <StackGrid
                columnWidth={width <= 600 ? '100%' : 425}
                appear={scaleDown.appear}
                appeared={scaleDown.appeared}
                enter={scaleDown.enter}
                entered={scaleDown.entered}
                leaved={scaleDown.leaved}
                gutterWidth={5}
                enableSSR={true}
                gutterHeight={5}
              >
                {workss()
                  .slice(0, more ? 12 : 6)

                  .map(work => (
                    <Work
                      key={work.id}
                      title={work.name}
                      height={work.height}
                      date={work.createdAt.seconds * 1000}
                      img={work.images[0]}
                      images={work.images}
                      categories={work.categories}
                      category={ops[currentOp]}
                      link={work.link}
                      openModal={openModal}
                      content={work.description}
                    />
                  ))}
              </StackGrid>
            )}
          </div>

          {workss().length > 6 && (
            <div className="row-button">
              <Btn onClick={() => setMore(!more)}>
                {!more ? 'View More' : 'Occult'}
              </Btn>
            </div>
          )}
        </div>
      </PerfectScrollbar>
    </WorksS>
  )
}

const WorksS = styled(motion.section) <PropsStyled>`
  color: #fff;
  height: 100%;
  overflow-x: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;

  transform: translate3d(0, 0, 0);
  padding: 0;
  z-index: 7;

  .container {
    flex: 1;
    width: 100%;
    max-width: none;
    padding: 2rem 1.5rem;
    margin-bottom: 2rem;
    position: relative;
    z-index: 10;
    transition: 0.3s ease-in-out transform;
    transform-origin: center center;
    transform: ${props => (props.isOpen ? 'scale(.8)' : 'scale(1)')};
  }

  .switch {
    display: flex;
    width: 100%;
    margin: 1rem 0;
    flex-shrink: 1;
    flex-wrap: wrap;
    position: relative;
    
  }
  .row-button {
    display: flex;
    margin-top: 2rem;
    justify-content: flex-end;
    align-items: center;
  }

`
