import {AiOutlineAppstore, AiOutlineContacts, AiOutlineHome,} from 'react-icons/ai'
import React, {FC} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {RiContactsLine, RiEqualizerLine} from 'react-icons/ri'
import {useIntl} from "react-intl";
import {ContainerMenu} from "./styles";

interface Item {
    icon: React.ReactElement,
    name: string,
    link: string
}

interface Props {
    callback: () => void
}


export const Menu: FC <Props>= ({callback}) => {
    const router = useRouter()
    const {formatMessage : t} = useIntl()
    const items: Item[] = [
        {
            icon: <AiOutlineHome size="2em"/>,
            name: t({id:'home'}),
            link: '/',
        },
        {
            icon: <RiContactsLine size="1.9em"/>,
            name: t({id:'about me'}),
            link: '/about',
        },

        {
            icon: <AiOutlineAppstore size="2em"/>,
            name: t({id:'works'}),
            link: '/works',
        },
        {
            icon: <AiOutlineContacts size="2em"/>,
            name: t({id:'contact'}),
            link: '/contact',
        },
    ]
    return (
        <ContainerMenu>
            {items.map(({link, icon, name}, i) => (
                <li key={i}>
                    <Link passHref href={link} locale={router.locale}>
                        <div
                            className={`item ${router.pathname == link ? 'active' : ''}`}
                            onClick={() => {
                                callback()
                            }}
                        >
                            {icon}
                            <div className="container-name">
                                <span> {name}</span>
                            </div>
                        </div>
                    </Link>
                </li>
            ))}
        </ContainerMenu>
    )
}


