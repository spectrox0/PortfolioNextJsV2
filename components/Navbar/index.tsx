import React from 'react'
import Menu from './Menu'
import Toggle from './Toggle'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {Icon} from '../Icon/index'

export default function Navbar() {
    const [isOpen, setOpen] = React.useState<boolean>(false)
    const toggle = (): void => {
        setOpen(!isOpen)
    }

    return (
        <>
            <Toggle callback={toggle} isOpen={isOpen}/>

            <nav className={isOpen ? 'open' : ''}>
                <PerfectScrollbar>
                    <div className="navbar-inner">
                        <Menu callback={toggle}/>
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
                </PerfectScrollbar>
            </nav>
        </>
    )
}
