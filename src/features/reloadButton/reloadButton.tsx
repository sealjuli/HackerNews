import { JSX } from 'react'
import { Button } from 'antd'
import { ReloadOutlined } from '@ant-design/icons'
import { useAppDispatch } from '../../shared/hooks/storeHooks'
import { fetchGetNews } from '../../shared/redux/slices/newsSlice'

export const ReloadButton = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const reloadNews = () => {
    dispatch(fetchGetNews())
  }

  return (
    <Button color="danger" variant="filled" onClick={reloadNews}>
      <p>Reload News</p>
      <ReloadOutlined />
    </Button>
  )
}
