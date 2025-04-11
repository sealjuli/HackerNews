import { JSX } from 'react'
import { Layout } from 'antd'
import { AllNewsWidget } from '../allNewsWidget/allNewsWidget'
import { useAppSelector } from '../../shared/hooks/storeHooks'
import { selectOneNewsExists } from '../../shared/redux/slices/newsSlice'
import { OneNewsWidget } from '../oneNewsWidget/oneNewsWidget'
import './contentWidgetStyle.css'

const { Content } = Layout

export const ContentWidget = (): JSX.Element => {
  const oneNews = useAppSelector(selectOneNewsExists)

  return (
    <Content className={'contentStyle'}>
      {!oneNews && <AllNewsWidget />}
      {oneNews && <OneNewsWidget />}
    </Content>
  )
}
