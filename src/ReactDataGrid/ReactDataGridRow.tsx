import React, {ReactElement} from 'react'
import { Column } from '../types/Columns'
import Checkbox from "../ReactDataGridTable/Checkbox";
import TableRow from "../ReactDataGridTable/TableRow";
import TableCell from "../ReactDataGridTable/TableCell";
import TableCellContent from "../ReactDataGridTable/TableCellContent";

interface Props<E> {
  data: E
  columns: Array<Column<E>>
  enableCheckbox?: boolean
  checked?: boolean
}

const ReactDataGridRow = <E,>(props: Props<E>): ReactElement => {
  const { data, columns, enableCheckbox, checked } = props
  return (
    <TableRow>
      { enableCheckbox && <Checkbox checked={checked ?? false} /> }
      { columns.map((column, idx) => {
        return (
          <TableCell key={idx} style={column.style}>
            { <TableCellContent>{column.selector(data)}</TableCellContent> }
          </TableCell>
        )
      })}
    </TableRow>
  )
}

export default ReactDataGridRow
