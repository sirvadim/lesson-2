import React from 'react'
import PropTypes from 'prop-types'

export const IconRadiobuttonOn = ({ color }) => (
  <svg width={24} height={24} fill="none">
    <circle cx={12} cy={12} r={10} fill={color ? color : '#FF3F6E'} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.5 15.5L6 12l-1.167 1.167L9.5 17.833l10-10-1.167-1.166L9.5 15.5z"
      fill="#fff"
    />
  </svg>
)

IconRadiobuttonOn.propTypes = {
  color: PropTypes.string,
}
