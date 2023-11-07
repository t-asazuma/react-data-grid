import styled from "styled-components";
import {BaseComponent} from "./BaseComponent";

const StyledTableCell = styled(BaseComponent)`
  width: auto;
  min-width: 50px;
  // text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 0px 10px;
`

export default StyledTableCell
