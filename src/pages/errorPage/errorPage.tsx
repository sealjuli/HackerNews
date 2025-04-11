import { JSX } from 'react'
import { Button } from 'antd'
import { selectError } from '../../shared/redux/slices/usersSlice'
import { useAppSelector, useAppDispatch } from '../../shared/hooks/storeHooks'
import { clearUsersState } from '../../shared/redux/slices/usersSlice'

export const ErrorPage = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const error = useAppSelector(selectError)

  const closeErrorWindow = () => {
    dispatch(clearUsersState())
  }

  return (
    <div className="bg-white p-20">
      <p>{error}</p>
      <Button onClick={closeErrorWindow}>OK</Button>
    </div>
  )
}
