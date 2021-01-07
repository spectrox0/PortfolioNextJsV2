import React from 'react'

interface Props {
  callback?(): void;
  isOpen: boolean
}
export default function Toggle({ callback, isOpen }: Props) {
  return (
    <div className={`toggle ${isOpen ? 'open' : ''}`} onClick={callback}>
      <div />
      <div />
      <div />
    </div>
  )
}
