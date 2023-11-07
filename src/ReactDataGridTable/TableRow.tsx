import React from 'react'
import styled from 'styled-components'
import {BaseComponent} from "./BaseComponent";

const StyledTableRow = styled(BaseComponent)`
  display: flex;
  width: 100%;
  height: 52px;
  flex-direction: row;
  border-bottom: 1px solid rgb(241, 243, 244);
  align-items: center;
`

export default StyledTableRow
