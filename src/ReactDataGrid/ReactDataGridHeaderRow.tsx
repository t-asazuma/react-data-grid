import React, {ReactElement} from 'react'
import {Column} from "../types/Columns";
import ReactDataGridTableHeaderRow from "../ReactDataGridTable/ReactDataGridTableHeaderRow";
import Checkbox from "../ReactDataGridTable/Checkbox";
import TableCell from "../ReactDataGridTable/TableCell";
interface Props<E> {
  columns: Array<Column<E>>
  enableCheckbox?: boolean
  checked?: boolean
}
export const ReactDataGridHeaderRow = <E,>(props: Props<E>): ReactElement => {
  const { columns, enableCheckbox, checked } = props
  return (
    <ReactDataGridTableHeaderRow>
      { enableCheckbox && <Checkbox checked={checked}/> }
      { columns.map((column, idx) => {
        return <TableCell key={idx} style={column.style}>{column.title}</TableCell>
      })}
    </ReactDataGridTableHeaderRow>
  )
}
