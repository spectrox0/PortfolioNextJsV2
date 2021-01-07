import React from 'react'
import Menu from './Menu'
import Toggle from './Toggle'
import PerfectScrollbar from 'react-perfect-scrollbar'
interface Props {

}
export default function Navbar() {
  const [isOpen, setOpen] = React.useState<boolean>(false)
  const toggle = (): void => {
    setOpen(!isOpen)
  }

  return (
    <>
      <Toggle callback={toggle} isOpen={isOpen} />

      <nav className={isOpen ? 'open' : ''}>
        <PerfectScrollbar>
          <div className="navbar-inner">
            <Menu callback={toggle} />
          </div>
        </PerfectScrollbar>
      </nav>
    </>
  )
}
