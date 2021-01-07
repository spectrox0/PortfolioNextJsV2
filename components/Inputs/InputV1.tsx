import PropTypes from 'prop-types'

import React from 'react'
interface Props {
  icon: React.ReactElement,
  id: string,
  name: string,
}
export default function Input({ icon, id, name, ...rest }: Props & React.HTMLProps<HTMLInputElement> & React.HTMLAttributes<HTMLButtonElement>) {
  return (
    <div className="input-container">
      <input name={name} id={id} {...rest} />
      <div className={`input ${rest.value && 'text'}`}>
        <label className="label" htmlFor={id}>
          {icon}
        </label>
        <label htmlFor={id} className="label-name">
          {name}
        </label>
      </div>
    </div>
  )
}

Input.propTypes = {
  labelText: PropTypes.node,
  icon: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
}
