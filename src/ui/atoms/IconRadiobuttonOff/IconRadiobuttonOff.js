import React from 'react'
import PropTypes from 'prop-types'

export const IconRadioButtonOff = ({ color }) => (
  <svg width={20} height={20} fill="none">
    <circle cx={10} cy={10} r={9.5} stroke={color ? color : '#D3D3D3'} />
  </svg>
)

IconRadioButtonOff.propTypes = {
  color: PropTypes.string,
}
