import styled from "styled-components";
import {BaseComponent} from "./BaseComponent";

const StyledTableCellContent = styled(BaseComponent)`
  width: 100%;
  min-width: 50px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

export default StyledTableCellContent
