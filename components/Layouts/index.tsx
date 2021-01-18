import React from 'react'
import Navbar from "../Navbar";
import Fog from './Animation/Fog'
import dynamic from 'next/dynamic'

interface Props {
  children?: React.ReactElement[]
}

const bg: string = require('images/bg/bg8.jpg?webp');

export default function Layout({ children }: Props) {

  return (
    <>
      <main id="main">
        <div className="layout">
          <div className="bghome" style={{ backgroundImage: `url("${bg}")` }}>
            {/*{images.map((element, index) => (
              <BgAnimate
                bg={element.bg}
                active={currentBg == index}
                key={element.bg}
                startCarousel={goRightBg}
              />
            ))}    */}
            <Fog />
          </div>

          <Navbar />

          <div className="layout-wrapper">{children}</div>
        </div>
      </main>
    </>
  )
}
