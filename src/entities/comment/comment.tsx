import { JSX, MouseEvent } from 'react'
import { useAppDispatch } from '../../shared/hooks/storeHooks'
import { fetchGetComments } from '../../shared/redux/slices/newsSlice'
import { NewsItemType } from '../../shared/types/newsTypes'

type PropsType = {
  mainComment: NewsItemType
  renderComments: (commentsArray: NewsItemType[]) => JSX.Element[]
}

export const Comment = ({
  mainComment,
  renderComments,
}: PropsType): JSX.Element => {
  const dispatch = useAppDispatch()

  const expandComments = (
    event: MouseEvent<HTMLDivElement>,
    kids: number[]
  ) => {
    event.stopPropagation()
    if (kids && kids.length > 0) {
      dispatch(fetchGetComments(kids))
    }
  }

  return (
    <div
      key={mainComment.id}
      className="bg-amber-50 mb-2 cursor-pointer"
      onClick={(e) => expandComments(e, mainComment.kids)}
    >
      <p>{mainComment.text}</p>
      <p className="text-gray-300">
        {mainComment.deleted ? 'comment deleted' : ''}
      </p>
      {mainComment.kids && mainComment.kids.length > 0 && (
        <p className="text-gray-400">{`${mainComment.kids.length} comments`}</p>
      )}
      {!mainComment.deleted && !mainComment.kids && (
        <p className="text-gray-400">{`0 comments`}</p>
      )}
      {mainComment.comments && mainComment.comments.length > 0 && (
        <div className="ml-6">{renderComments(mainComment.comments)}</div>
      )}
    </div>
  )
}
