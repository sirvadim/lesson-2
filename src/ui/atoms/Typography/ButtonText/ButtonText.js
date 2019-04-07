import PropTypes from 'prop-types'
import { styled } from '@ui/theme'

export const ButtonText = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: ${props => (props.color ? props.color : props.theme.pallete.nero)};
`

ButtonText.propTypes = {
  color: PropTypes.string,
}
