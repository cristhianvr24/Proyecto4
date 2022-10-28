import './App.css';
import logospiderman from './imagenes/spiderman.webp'
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          src={ logospiderman }
          className='logo'/>
      </div>
      <div className='tareas'>
        <center><h1>Mis SpiderTareas</h1></center>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
