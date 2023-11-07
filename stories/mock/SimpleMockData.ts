import {Column} from "../../src/types/Columns";

export interface SimpleMockDataProps {
  id: number
  title: string
  category: string
  maker: string
  price: number
}

export const SimpleMockData: Array<SimpleMockDataProps> = [
  {
    id: 1,
    title: 'カローラスポーツ',
    category: '車体',
    maker: 'TOYOTA',
    price: 4000000
  },
  {
    id: 2,
    title: 'カローラツーリング',
    category: '車体',
    maker: 'TOYOTA',
    price: 4500000
  },
  {
    id: 3,
    title: 'スカイライン',
    category: '車体',
    maker: 'NISSAN',
    price: 5000000
  },
  {
    id: 4,
    title: 'アコード',
    category: '車体',
    maker: 'HONDA',
    price: 5000000
  }
]
