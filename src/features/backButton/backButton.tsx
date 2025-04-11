import { JSX } from 'react'
import { Button } from 'antd'
import { useAppDispatch } from '../../shared/hooks/storeHooks'
import { clearCurrentNews } from '../../shared/redux/slices/newsSlice'
import { CaretLeftFilled } from '@ant-design/icons'

export const BackButton = (): JSX.Element => {
  const dispatch = useAppDispatch()

  const clearbyClick = () => {
    dispatch(clearCurrentNews())
  }

  return (
    <Button type="text" onClick={clearbyClick} className="self-start">
      <CaretLeftFilled />
      <p>Вернуться на главную</p>
    </Button>
  )
}
