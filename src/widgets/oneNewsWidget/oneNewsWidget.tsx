import { JSX } from 'react'
import { BackButton } from '../../features/backButton/backButton'
import { NewsItem } from '../../entities/newsItem/newsItem'

export const OneNewsWidget = (): JSX.Element => {
  return (
    <div className="flex flex-col py-5 px-6 items-center">
      <BackButton />
      <NewsItem />
    </div>
  )
}
