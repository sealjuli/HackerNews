import { JSX } from 'react'
import { Layout } from 'antd'
import { AllNewsWidget } from '../allNewsWidget/allNewsWidget'
import { useAppSelector } from '../../shared/hooks/storeHooks'
import { selectOneNewsExists } from '../../shared/redux/slices/newsSlice'
import { OneNewsWidget } from '../oneNewsWidget/oneNewsWidget'

const { Content } = Layout

export const ContentWidget = (): JSX.Element => {
  const oneNews = useAppSelector(selectOneNewsExists)

  return (
    <Content className="min-h-[120px] text-black bg-gray-200 overflow-x-auto">
      {!oneNews && <AllNewsWidget />}
      {oneNews && <OneNewsWidget />}
    </Content>
  )
}
