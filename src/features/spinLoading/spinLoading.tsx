import { JSX } from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

export const SpinLoading = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spin
        indicator={
          <LoadingOutlined className="!text-4xl !text-orange-500" spin />
        }
      />
    </div>
  )
}
