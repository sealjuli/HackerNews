import { JSX, useEffect } from 'react'
import { Row } from 'antd'
import { useAppSelector, useAppDispatch } from '../../shared/hooks/storeHooks'
import {
  fetchGetNews,
  selectIsSucceededStatus,
  selectNewsArray,
} from '../../shared/redux/slices/newsSlice'
import { NewsCol } from '../../entities/newsCol/newsCol'
import { SpinLoading } from '../../features/spinLoading/spinLoading'

export const AllNewsWidget = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const ok = useAppSelector(selectIsSucceededStatus)
  const news = useAppSelector(selectNewsArray)

  useEffect(() => {
    if (!ok) {
      dispatch(fetchGetNews())
    }
  }, [dispatch, ok]) // ?

  if (ok && news && news?.length > 0) {
    const arr = news.map((newsInfo) => {
      return <NewsCol key={newsInfo.id} newsInfo={newsInfo} />
    })

    return <Row className="mt-10 justify-center">{arr}</Row>
  }

  return <SpinLoading />
}
