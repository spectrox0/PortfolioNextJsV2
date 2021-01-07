import React from 'react'

import BgAnimate from '../BgAnimate'
import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('../Navbar'), { ssr: false })
interface Props {
  children?: React.ReactElement[]
}
interface Background {
  bg: string
}
export default function Layout({ children }: Props) {
  const [currentBg, setCurrentBg] = React.useState<number>(0)

  const goRightBg: Function = (): void => {
    setCurrentBg(currentBg == images.length - 1 ? 0 : currentBg + 1)
  }
  const images: Background[] = [
    {
      bg: 'images/bg/bg8.jpg',
    },
    {
      bg: 'images/bg/bg11.jpg',
    },
    {
      bg: 'images/bg/bg10.jpg',
    },
  ]

  return (
    <>
      <main id="main">
        <div className="layout">
          <div className="bghome">
            {images.map((element, index) => (
              <BgAnimate
                bg={element.bg}
                active={currentBg == index}
                key={element.bg}
                startCarousel={goRightBg}
              />
            ))}
          </div>
          <Navbar />
          <div className="layout-wrapper">{children}</div>
        </div>
      </main>
    </>
  )
}
