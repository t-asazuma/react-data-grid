import {CSSProperties} from "react";

export interface Column<E> {
  /**
   * ヘッダ行に表示する値
   */
  title: string
  /**
   * css style
   */
  style?: Partial<CSSProperties>
  /**
   * columnに表示する値
   * @param row
   */
  selector: (row: E) => any
  /**
   * 右寄せするか
   */
  rightAlignment?: boolean
  /**
   * sort対象するか
   */
  sort?: boolean
}
