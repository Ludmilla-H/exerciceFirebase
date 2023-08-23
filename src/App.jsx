import './App.css'
import { Routes , Route } from 'react-router-dom'
import Liste from './Liste'
import Detail from './Detail'

function App() {

  return (
<div>
  <Routes>
    <Route path="/" element={<Liste/>}/>
    <Route path="/detail/:idSac" element={<Detail/>}/>
  </Routes>

</div>  
)
}

export default App
