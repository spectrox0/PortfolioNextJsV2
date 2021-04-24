import * as React from 'react';
import {ContainerSkill} from "./styles";
import {Icon} from "../Icon";

interface Props {
    item: string,
    className?: string
}

export const Skill: React.FC<Props> = ({item, className}) => {
    return (
        <ContainerSkill className={className}>
            <Icon className={'mr-2'} name={item}/>
            <span> {item} </span>
        </ContainerSkill>
    )
}