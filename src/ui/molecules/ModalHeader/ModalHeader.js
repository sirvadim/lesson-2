import React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@ui/theme'
import { IconClose } from '@ui/atoms'
import { HLevel4 } from '@ui/atoms/Typography'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;
`

const IconContainer = styled.div`
  width: 40px;
  height: 48px;
  align-items: center;
  justify-content: center;
  display: flex;
`

const TitleContainer = styled.div`
  flex: 1;
  text-align: center;
`

export const ModalHeader = ({ children, action }) => (
  <Container>
    <IconContainer onClick={action}>
      <IconClose />
    </IconContainer>
    {typeof children === 'string' ? (
      <TitleContainer>
        <HLevel4>{children}</HLevel4>
      </TitleContainer>
    ) : (
      children
    )}
  </Container>
)

ModalHeader.propTypes = {
  children: PropTypes.node,
  action: PropTypes.func.isRequired,
}
