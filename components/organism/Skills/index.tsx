import React from 'react'
import {Skill} from '@/molecules/Skill'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {Title} from '@/atoms/Title'
import {Btn} from '@/atoms/Button'
import {ops, skills} from '../../../helpers/constants'
import {useIntl} from "react-intl";
import {ContainerSkillTemplate} from "./styles";
import {Box, Grid} from "@material-ui/core";
import {CustomBox} from "../../atoms/Box";
import {Container} from '@/components/atoms/Container'

const Skills: React.FC = (): JSX.Element => {
    const {formatMessage: t} = useIntl()
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
        <ContainerSkillTemplate
            id="skills"
            animate="enter"
            initial="initial"
            exit="exit"
            variants={SkillVariant}
            transition={{duration: 0.5}}
        >
            <Container>
                <CustomBox my={3} py={4}>
                    <Box mb={2}>
                        <Title variant={'h1'} align={'left'}>
                            {t({id: 'my'})} <span className='word2'> {t({id: 'skills'})}</span>
                        </Title>
                    </Box>
                    <Grid container>
                        <Grid xs={12} md={5}>

                            {ops.map((item, i) => (
                                <Box key={item} my={1.6}>
                                    <Btn
                                        fullWidth
                                        size={'large'}
                                        className={i == currentOp ? 'active' : ''}
                                        onClick={() => setCurrentOp(i)}
                                    >
                                        {item}
                                    </Btn>
                                </Box>
                            ))}
                        </Grid>
                        <Grid xs={12} md={7}>
                            <Box my={2} px={1}>
                                <Grid container>

                                    {skills
                                        .filter(skill => skill.categories.includes(ops[currentOp]))
                                        .map((props, index) => (
                                            <Grid key={props.name} xs={12} sm={6}>
                                                <Box my={1}>
                                                    <Skill delay={0.5 * index} {...props} />
                                                </Box>
                                            </Grid>
                                        ))}
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </CustomBox>
            </Container>
        </ContainerSkillTemplate>
    )
}


export default Skills;
