import React from 'react'
import PropTypes from 'prop-types'

export const IconCheckboxOff = ({ color }) => (
  <svg width={24} height={24} fill="none">
    <rect
      x={2.5}
      y={2.5}
      width={19}
      height={19}
      rx={1.5}
      stroke={color ? color : '#D3D3D3'}
    />
  </svg>
)

IconCheckboxOff.propTypes = {
  color: PropTypes.string,
}
