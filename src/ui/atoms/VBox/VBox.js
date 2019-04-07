import PropTypes from 'prop-types'
import { styled } from '@ui/theme'

export const VBox = styled.div`
  width: ${props =>
    typeof props.width === 'number'
      ? props.width
      : props.theme.paddings.main}px;
`

VBox.propTypes = {
  width: PropTypes.number,
}
