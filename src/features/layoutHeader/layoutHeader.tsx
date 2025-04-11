import { JSX } from 'react'
import { Layout } from 'antd'
import { ReloadButton } from '../reloadButton/reloadButton'
import { useAppSelector } from '../../shared/hooks/storeHooks'
import { selectOneNewsExists } from '../../shared/redux/slices/newsSlice'
import { ReloadCommentsButton } from '../reloadCommentsButton/reloadCommentsButton'

const { Header } = Layout

export const LayoutHeader = (): JSX.Element => {
  const oneNewsExists = useAppSelector(selectOneNewsExists)

  return (
    <Header className="flex items-center justify-between !px-[100px] !bg-white">
      <div className="flex">
        <div className="bg-[url('/logo.png')] bg-contain w-[40px] h-[40px] mr-[30px]" />
        <p className="text-2xl text-orange-400 content-end">HackerNews</p>
      </div>
      {!oneNewsExists && <ReloadButton />}
      {oneNewsExists && <ReloadCommentsButton />}
    </Header>
  )
}
