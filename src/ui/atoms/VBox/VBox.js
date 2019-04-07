import PropTypes from 'prop-types'
import { styled, theme } from '@ui/theme'

export const VBox = styled.div`
  width: ${props => props.width}px;
`

VBox.propTypes = {
  width: PropTypes.number,
}

VBox.defaultProps = {
  width: theme.paddings.main,
}
