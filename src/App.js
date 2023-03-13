import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'dracula-ui/styles/dracula-ui.css'
import { Box } from 'dracula-ui'
import Nav from './components/Nav'
import Dashboard from './pages/Dashboard'
import TicketPage from './pages/TicketPage'


const App = () => {
  return (

    <Box className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/ticket' element={<TicketPage />} />
          <Route path='/ticket/:id' element={<TicketPage editMode={true} />} />
        </Routes>
      </BrowserRouter>
    
    </Box>
  )
}

export default App;
