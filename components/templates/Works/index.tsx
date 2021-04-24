import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import PerfectScrollbar from 'react-perfect-scrollbar'
import WorkModel from '../../../models/Work'
import {Title} from '@/atoms/Title'
import {Btn} from '@/atoms/Button'
import {useIntl} from "react-intl";
import {ContainerWorkTemplate} from "./styles";
import {Box} from "@material-ui/core";
import {GridWorks} from "../../organism/Grid/Works";
import {WorkVariant} from "../../../utils/animations/transitionPage";

interface Props {
    works: WorkModel[]
}


export const WorksTemplate: React.FC<Props> = ({works}) => {
    const {formatMessage: t} = useIntl()
    const ops: string[] = [t({id: 'all'}), 'VUE', 'ANGULAR', 'REACT', 'PWA', 'NODEJS']
    const [currentOp, setCurrentOp] = React.useState<number>(0)
    // const [width, setWidth] = React.useState<number>(0)
    const {isOpen} = useSelector(state => ({
        ...state
    }))
    const works_ = () => {
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
    /*React.useEffect(() => {
        setWidth(window.innerWidth)
        const handlingSize = () => {
            setWidth(window.innerWidth)
        }
        addEventListener('resize', handlingSize)
        return () => removeEventListener('resize', handlingSize)
    }, []) */


    // @ts-ignore
    return (
        <ContainerWorkTemplate
            id="works"
            isOpen={isOpen}
            animate="enter"
            initial="initial"
            exit="exit"
            variants={WorkVariant}
            transition={{duration: 0.5}}
        >
            <PerfectScrollbar>
                <div className="container">
                    <Title variant={'h1'} align={'center'} color={"primary"} fontWeight={700}>
                        {t({id: 'works'})} <span className='shadow'>  {t({id: 'works'})}</span>
                    </Title>
                    <div className="switch">
                        {ops.map((item, i) => (
                            <Box key={item} mx={1} my={1} flexGrow={1}>
                                <Btn
                                    fullWidth
                                    className={i == currentOp ? 'active' : ''}
                                    onClick={() => setCurrentOp(i)}
                                >
                                    {item}
                                </Btn>
                            </Box>
                        ))}
                    </div>
                    <GridWorks openModal={openModal} works={works_().slice(0, more ? 20 : 6)}/>

                    {works_().length > 6 && (
                        <div className="row-button">
                            <Btn onClick={() => setMore(!more)}>
                                {!more ? 'View More' : 'Occult'}
                            </Btn>
                        </div>
                    )}
                </div>
            </PerfectScrollbar>
        </ContainerWorkTemplate>
    )
}


