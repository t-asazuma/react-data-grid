import React, {FC, ReactElement, useCallback, useState} from 'react'
import { Column } from '../types/Columns'
import {ReactDataGridHeaderRow} from './ReactDataGridHeaderRow'
import ReactDataGridRow from './ReactDataGridRow'
import TableWrapper from "../ReactDataGridTable/TableWrapper";
import Table from "../ReactDataGridTable/Table";


export interface ReactDataGridProps<E, ID> {
  /**
   * 表示するdataのリスト
   * TODO: DataSourceへのアダプターとするかデータそのものとするか要検討
   */
  data: Array<E>
  /**
   * column定義
   */
  columns: Array<Column<E>>
  /**
   * トータル件数
   */
  total: number
  /**
   * ソートを有効にするか
   */
  enableSort?: boolean
  /**
   * 行選択チェックボックスを有効にするか
   */
  enableRowSelectCheckbox?: boolean
  /**
   * 初期選択状態
   */
  selectedRows: Array<ID>
  /**
   * 選択された行のIDを取得するメソッド
   * @param row
   */
  getRowId: (row: E) => ID
  /**
   * ページネーションを有効にするか
   */
  enablePagination?: boolean
  pagination?: {
    /**
     * 一画面辺りの表示件数
     */
    limit: number
    /**
     * 現在のページ番号
     */
    currentPageNo: number
  }
  style: React.CSSProperties
}

/**
 * 描画タイミング
 *  データ変更時
 * @param props
 * @constructor
 */
const ReactDataGrid = <E, ID,>(props: ReactDataGridProps<E, ID>): ReactElement => {
  const { data, columns, enableRowSelectCheckbox, selectedRows } = props
  // TODO: contextに持たせたほうがいいかも
  const [rows, setRows] = useState(new Set(selectedRows))

  const rowSelectedHandler = useCallback((checked: boolean, row: E) => {
    const id = props.getRowId(row)
    if (checked) {
      rows.add(id)
      setRows(rows)
    } else {
      rows.delete(id)
      setRows(rows)
    }
  },[setRows])

  return (
    <TableWrapper>
      <Table className="tt">
        <ReactDataGridHeaderRow columns={columns} enableCheckbox={enableRowSelectCheckbox}/>
        { data.map((row, idx) => {
          return <ReactDataGridRow key={idx} data={row} columns={columns} enableCheckbox={enableRowSelectCheckbox}/>
        })}
      </Table>
    </TableWrapper>
  )
}

export default ReactDataGrid
