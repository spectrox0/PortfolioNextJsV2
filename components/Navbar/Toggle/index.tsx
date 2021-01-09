import React from 'react'

interface Props {
    callback?(): void;
    isOpen: boolean
}

const Toggle: React.FC<Props> = ({callback, isOpen}) => {
    return <div className={`toggle ${isOpen ? 'open' : ''}`} onClick={callback}>
        <div/>
        <div/>
    </div>
}

export default Toggle;
