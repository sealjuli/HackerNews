import { JSX } from 'react'
import { Routes, Route } from 'react-router-dom'
import { hackersNewsRoutes } from '../shared/routes/routes'
import { HomePage } from '../pages/homePage/homePage'

export const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path={hackersNewsRoutes.root} element={<HomePage />}></Route>
    </Routes>
  )
}
