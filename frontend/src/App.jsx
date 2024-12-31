import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"

import CreateProductPage from './pages/CreateProductPage.jsx'
import Navbar from './components/Navbar.jsx'
import HomePage from './pages/HomePage.jsx'


function App() {

  return (
    <>
      <Box minH={'100vh'}>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create' element={<CreateProductPage />} />
        </Routes>
      </Box>
    </>
  )
}

export default App
