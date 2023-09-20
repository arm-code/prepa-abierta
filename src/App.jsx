import './App.css'
import { Title } from './components/Title'
import { Welcome } from './components/Welcome'
import { Boton } from './components/Boton'

function App() {
  

  return (
    <div className='w-3/4'>
      <Title/>
      <Welcome/>
      <Boton txt={'PLATICA INFORMATIVA'} class_name={1}/>
      <Boton txt={'COSTOS'} class_name={2}/>
      <Boton txt={'CENTROS DE ASESORIAS'} class_name={1}/>
      
    
     
    </div>
  )
}

export default App
