import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App.tsx'
import MyHolidays from './components/MyHolidays.tsx'

export const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<App />} />
    <Route path="/userLocations" element={<MyHolidays />} />
  </>
)

