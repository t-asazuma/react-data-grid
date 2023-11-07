import React from 'react'
import styled from 'styled-components'
import {ReactElement} from 'react'

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const StyledCheckboxHidden = styled.input.attrs({type: 'checkbox'})`
  // opacity: 0;
`

const StyledCheckbox = styled.input.attrs({type: 'checkbox'})`
  opacity: 0;
`

const Checkbox = (props: React.InputHTMLAttributes<HTMLInputElement>): ReactElement => {
  return (
    <CheckboxContainer>
      <StyledCheckboxHidden checked={props.checked}/>
    </CheckboxContainer>
  )
}

export default Checkbox
