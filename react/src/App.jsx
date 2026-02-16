
import { Route, Routes } from 'react-router'

import '@uswds/uswds/css/uswds.css'

import Index from './applications/welcome/index'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </>
  )
}

export default App
