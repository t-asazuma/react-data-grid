import React from 'react'
import {Column} from '../../src/types/Columns'
import {SimpleMockData, SimpleMockDataProps} from '../mock/SimpleMockData'
import ReactDataGrid from '../../src/ReactDataGrid/ReactDataGrid'
import {ComponentStoryObj} from '@storybook/react'

type Story = ComponentStoryObj<typeof ReactDataGrid<SimpleMockDataProps, number>>
export default {
  component: ReactDataGrid,
}

// const defaultReactDataGrid: ReactDataGridProps<SimpleMockDataProps, number> = {
//   data: SimpleMockData,
// }


//
// export default {
//   title: 'Example/ReactDataGrid',
//   component: ReactDataGrid
// } as ComponentMeta<typeof ReactDataGrid>
//
const SimpleMockColumns: Array<Column<SimpleMockDataProps>> = [
  {
    title: 'id',
    style: {width: '100px'},
    selector: row => row.id
  },
  {
    title: 'title',
    style: {width: '300px'},
    selector: row => row.title
  },
  {
    title: 'カテゴリ',
    style: {width: '200px'},
    selector: row => row.category
  },
  {
    title: 'メーカー',
    style: {width: '200px'},
    selector: row => row.maker
  },
  {
    title: '価格',
    style: {width: '200px'},
    selector: row => row.price
  }
]

export const Default: Story = {
  args: {data: SimpleMockData, columns: SimpleMockColumns, total: SimpleMockData.length}
}

// const Template = (args: ReactDataGridProps<SimpleMockDataProps, number>) => <ReactDataGrid {...args}/>
// export const Basic = Template.bind({})
// // @ts-ignore
// Basic.args = {
//   data: SimpleMockData,
//   columns: SimpleMockColumns,
//   total: SimpleMockData.length
// } as ReactDataGridProps<SimpleMockDataProps, number>
