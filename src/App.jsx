import { useState } from 'react';
import './App.css'
import CrearActividad from './src/Agregaractividad/CrearActividad';
import DetalleActividad from './detalleactividad/DetalleActividad'; 
import ItemActividad from './itemsactividades/ItemActividad';
import datos from './data/jiji.json';

function App() {
  const blankData = {
    "id":"", 
    "nombre":"",
    "descripcion":"", 
    "estado":false, 
    "fecha":""};

    const[data, setData] = useState(Datos);
    const [itemData, setItemData] = useState(blankData);

    const handleClicAdd = (value) =>{
      setData(value);
    };
    const handleClicDetail = (value) =>{
      setItemData(value);
    };
    const handleClickUpdate = (value) =>{
      const dataUpdate = data.map((item)=>{
          if (item.id == value.id) {
            return { ...item, ...value };
          }
          return item;
      })
      setItemData(value);
      setData(dataUpdate);
    };
    const handleDeleteActivity = (id) => {
      setData((prevData) => prevData.filter((item) => item.id !== id));
      setItemData(blankData);
    };
  return (
    <div className='principal'>
      <header className='header'>To Do List</header>
      <div className='principal ladero'> 
        <CrearActividad dato={data} agregar={handleClicAdd} />
        <DetalleActividad />
      </div>
      <section className="lista">
        <h2>Lista de actividades</h2>
        {data.map((value, index) => (
          <ItemActividad 
            key={index}
            id={value.id}
            data={value}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
