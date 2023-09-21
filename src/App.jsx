import './App.css'
import { Title } from './components/Title'
import { Welcome } from './components/Welcome'
import { Boton } from './components/Boton'

function App() {
  

  return (
    <div className='w-3/4'>
      <Title/>
      <Welcome/>
      <Boton txt={'PLATICA INFORMATIVA'} link_to_page={"https://spaytchihuahua.gob.mx/preparatoria-platica-informativa.php"} class_name={1}/>
      <Boton txt={'COSTOS'} link_to_page={"https://spaytchihuahua.gob.mx/preparatoria-costos.php"} class_name={2}/>
      <Boton txt={'CENTROS DE ASESORIAS'} link_to_page={"https://spaytchihuahua.gob.mx/preparatoria-asesorias.php"}class_name={1}/>
     
    </div>
  )
}

export default App
