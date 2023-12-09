import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App.tsx'
// import Fruits from './components/Fruits.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    {/* <Route index element={<Fruits />} /> */}
  </Route>
)
