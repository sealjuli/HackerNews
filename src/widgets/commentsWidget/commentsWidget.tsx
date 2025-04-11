import { JSX, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../shared/hooks/storeHooks'
import { selectOneNews } from '../../shared/redux/slices/newsSlice'
import { fetchGetComments } from '../../shared/redux/slices/newsSlice'
import { NewsItemType } from '../../shared/types/newsTypes'
import { Comment } from '../../entities/comment/comment'
import { Spin } from 'antd'

export const CommentsWidget = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const newsInfo = useAppSelector(selectOneNews)

  useEffect(() => {
    if (newsInfo?.kids && newsInfo.kids.length > 0) {
      dispatch(fetchGetComments(newsInfo.kids))
    }
  }, [])

  const renderComments = (commentsArray: NewsItemType[]) => {
    return commentsArray.map((mainComment) => (
      <Comment
        key={mainComment.id}
        mainComment={mainComment}
        renderComments={renderComments}
      />
    ))
  }

  if (newsInfo?.comments && newsInfo?.comments.length > 0) {
    const arr = renderComments(newsInfo.comments)
    return <div>{arr}</div>
  }

  return <Spin />
}
