import PropTypes from 'prop-types'
import { styled, theme } from '@ui/theme'

export const HBox = styled.div`
  height: ${props => props.height}px;
`

HBox.propTypes = {
  height: PropTypes.number,
}

HBox.defaultProps = {
  height: theme.paddings.main,
}
