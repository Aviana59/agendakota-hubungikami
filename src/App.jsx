
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts'
import Contact from './views/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
         <Route index element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
