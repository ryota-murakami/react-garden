import React from 'react'
import styled from '@emotion/styled'
import { ModalState } from '../index'

const Screen = styled.div<{ isOpen: ModalState['isOpen'] }>`
  position: absolute;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
`

interface Props {
  isOpen: ModalState['isOpen']
  // @TODO give certainly type to any
  colseModal: any
}

// @TODO should be close Modal when you click overlay
const Overlay: React.FC<Props> = ({ isOpen, colseModal }) => {
  return <Screen isOpen={isOpen} onClick={colseModal} />
}

export default Overlay
