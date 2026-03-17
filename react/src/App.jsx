
import { Route, Routes } from 'react-router'

import '@uswds/uswds/css/uswds.css'

import LandingMain from './applications/uswdsTemplates/landing-main.jsx'
import Index from './applications/welcome/index'

function App() {

  return (
    <>
      <Routes>
        <Route path='' element={<LandingMain />} />
      </Routes>
    </>
  )
}

export default App
