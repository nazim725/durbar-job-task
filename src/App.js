import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './Components/Navigation/Navigation'
import Banner from './Components/Banner/Banner'
import Attainments from './Components/Attainments/Attainments'
import Navs from './Components/Navs/Navs'
import Graph1 from './Components/Graph1/Graph1'
import MultiLineChart from './Components/Graph1/Graph1'
import Graph2 from './Components/Graph1/Chart'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <Attainments />

      <Navs />

      <Graph1 />
    </div>
  )
}

export default App
