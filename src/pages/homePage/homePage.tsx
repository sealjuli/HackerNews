import { JSX } from 'react'
import { Layout } from 'antd'
import { LayoutHeader } from '../../features/layoutHeader/layoutHeader'
import { ContentWidget } from '../../widgets/contentWidget/contentWidget'

export const HomePage = (): JSX.Element => {
  return (
    <Layout className="overflow-hidden w-full h-screen">
      <LayoutHeader />
      <ContentWidget />
    </Layout>
  )
}
