import React, {FC} from 'react'
import Menu from './Menu'
import Toggle from './Toggle'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {Icon} from '../Icon/index'
import {useRouter} from "next/router";
import Flag from 'country-flag-icons/react/1x1'

const Navbar: FC = () => {
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
        'es': (props) : JSX.Element => <Flag.ES title="Spain" {...props} />,
        'en': (props) : JSX.Element => <Flag.US title="United States" {...props}/>
    }
    return (
        <>
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
                                        {Flags[value]({className:`flag ${router.locale===value? 'active' : ''}`})}
                                    </div>
                                )
                            })}
                        <div className='social-networks'>
                            <a
                                className="icon"
                                href="  https://github.com/spectrox0"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Icon.github/>
                            </a>
                            <a className='icon'
                               href="https://www.linkedin.com/in/alejandro-velazco-rodriguez-849785169/"
                               target="_blank"
                               rel="noopener noreferrer">
                                <Icon.linkedin/>
                            </a>

                            <a
                                className="icon"
                                href="https://t.me/darkdeveloperx"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon.telegram/>
                            </a>
                        </div>
                        </div>
                    </div>
                </PerfectScrollbar>
            </nav>
        </>
    )
}
export default Navbar;
