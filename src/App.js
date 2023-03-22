import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import 'dracula-ui/styles/dracula-ui.css'
import { Box } from 'dracula-ui'
import Nav from './components/Nav'
import Dashboard from './pages/Dashboard'
import TicketPage from './pages/TicketPage'
import CategoriesContext from './context'


const App = () => {
    const [categories, setCategories] = useState(null)
    const value = { categories, setCategories }

  return (
    <Box className="app">
      <CategoriesContext.Provider value={value}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/ticket' element={<TicketPage />} />
          <Route path='/ticket/:id' element={<TicketPage editMode={true} />} />
        </Routes>
      </BrowserRouter>
      </CategoriesContext.Provider>
    </Box>
  )
}

export default App;
