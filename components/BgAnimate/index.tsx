import React from 'react'

interface Props {
  startCarousel: Function
  active: boolean
  bg: string
}

export default function SlideBg({ startCarousel, active, bg }: Props) {
  React.useEffect(() => {
    let interval: any
    if (active) interval = setInterval(startCarousel, 8000)
    else clearInterval(interval)

    return () => {
      clearInterval(interval)
    }
  }, [active])

  return (
    <div
      className={`slide ${active ? 'active' : ''}`}
      style={{ backgroundImage: `url("${bg}")` }}
    ></div>
  )
}
