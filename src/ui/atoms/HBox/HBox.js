import PropTypes from 'prop-types'
import { styled } from '@ui/theme'

export const HBox = styled.div`
  height: ${props =>
    typeof props.height === 'number'
      ? props.height
      : props.theme.paddings.main}px;
`

HBox.propTypes = {
  height: PropTypes.number,
}
