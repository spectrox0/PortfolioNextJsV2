import React, {FC} from 'react'
import {Menu} from '@/molecules/Menu'
import {Toggle} from '@/atoms/Toggle'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {useRouter} from "next/router";
import Flag from 'country-flag-icons/react/1x1'
import {ContainerNavbar} from "./styles";

export const Navbar: FC = () => {
    const [isOpen, setOpen] = React.useState<boolean>(false)
    const toggle = (): void => {
        setOpen(!isOpen)
    }
    const router = useRouter()
    const changeLocale = (value): void => {
        const locale = value;
        router.push(router.pathname, router.pathname, {locale}).then(() => ({}))
    }
    const Flags = {
        'es': (props): JSX.Element => <Flag.ES title="Spain" {...props} />,
        'en': (props): JSX.Element => <Flag.US title="United States" {...props}/>
    }
    return (
        <ContainerNavbar>
            <Toggle callback={toggle} isOpen={isOpen}/>

            <nav className={isOpen ? 'open' : ''}>
                <PerfectScrollbar>
                    <div className="navbar-inner">
                        <Menu callback={toggle}/>
                        <div className={'bottom-menu'}>
                            {router.locales && router.locales.map((value, i) => {
                                return (
                                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                                    <div className={'item-flag'} key={i} onClick={(e) => {
                                        e.preventDefault();
                                        changeLocale(value)
                                    }}>
                                        {Flags[value]({className: `flag ${router.locale === value ? 'active' : ''}`})}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </PerfectScrollbar>
            </nav>
        </ContainerNavbar>
    )
}
