import { JSX } from 'react'
import { Col } from 'antd'
import { NewsItemType } from '../../shared/types/newsTypes'
import { useAppDispatch } from '../../shared/hooks/storeHooks'
import { setCurrentNews } from '../../shared/redux/slices/newsSlice'

type PropsType = {
  newsInfo: NewsItemType
}

export const NewsCol = ({ newsInfo }: PropsType): JSX.Element => {
  const dispatch = useAppDispatch()

  const clickOnNews = () => {
    dispatch(setCurrentNews(newsInfo))
  }

  return (
    <Col
      span={16}
      className="ml-6 mb-6 mr-10 p-2 bg-amber-100 cursor-pointer shadow-lg text-gray-600"
      onClick={clickOnNews}
    >
      <p
        className="font-semibold text-gray-800 hover:text-amber-500 transition-all duration-300
                   cursor-pointer shadow-lg p-2 rounded-md bg-white"
      >
        {newsInfo.title}
      </p>
      <p>{`Rating: ${newsInfo.score}`}</p>
      <p>{`Author: ${newsInfo.by}`}</p>
      <p>{new Date(newsInfo.time * 1000).toLocaleString()}</p>
      {/* <p>{`URL: ${newsInfo.url}`}</p> */}
    </Col>
  )
}
