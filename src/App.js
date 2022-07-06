import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './Components/Navigation/Navigation'
import Banner from './Components/Banner/Banner'
import Attainments from './Components/Attainments/Attainments'
import Navs from './Components/Navs/Navs'
import Graph from './Components/Graph/Graph'
import { useState } from 'react'

function App() {
  const [active, setActive] = useState('today')
  return (
    <div style={{ background: '#f6f5fb' ,paddingBottom:'40px'}}>
      <Navigation />
      <Banner />
      <Attainments active={active} setActive={setActive} />
    </div>
  )
}

export default App
