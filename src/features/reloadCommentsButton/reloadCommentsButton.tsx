import { JSX } from 'react'
import { Button } from 'antd'
import { ReloadOutlined } from '@ant-design/icons'
import { useAppSelector, useAppDispatch } from '../../shared/hooks/storeHooks'
import {
  fetchGetComments,
  clearCurrentNewsComments,
  selectOneNews,
} from '../../shared/redux/slices/newsSlice'

export const ReloadCommentsButton = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const news = useAppSelector(selectOneNews)

  const reloadComments = () => {
    if (news && news.kids) {
      dispatch(clearCurrentNewsComments())
      dispatch(fetchGetComments(news.kids))
    }
  }

  return (
    <Button color="danger" variant="filled" onClick={reloadComments}>
      <p>Reload comments </p>
      <ReloadOutlined />
    </Button>
  )
}
