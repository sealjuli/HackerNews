import { JSX } from 'react'
import { useAppSelector } from '../../shared/hooks/storeHooks'
import { selectOneNews } from '../../shared/redux/slices/newsSlice'
import { CommentsWidget } from '../../widgets/commentsWidget/commentsWidget'

export const NewsItem = (): JSX.Element => {
  const newsInfo = useAppSelector(selectOneNews)

  return (
    <div className="w-[80vw] mt-10 p-2 bg-amber-100 shadow-lg">
      <p className="font-semibold text-gray-800 shadow-lg p-2 rounded-md bg-white text-center">
        {newsInfo?.title}
      </p>
      <p>
        <span>Link: </span>
        <a href={newsInfo?.url} target="_blank" rel="noopener noreferrer">
          {newsInfo?.url}
        </a>
      </p>
      <p>{`Author: ${newsInfo?.by}`}</p>
      {newsInfo?.time && (
        <p>{new Date(newsInfo?.time * 1000).toLocaleString()}</p>
      )}
      <p className="text-gray-400">{`${newsInfo?.descendants} comments`}</p>
      <CommentsWidget />
    </div>
  )
}
