import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'
import './App.css';
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Error404 from './components/Error/Error404.jsx';
import Form from './components/form/Form.jsx';

function App() {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false)

   const API_KEY = 'pi-cand3m'
   const EMAIL = 'alguien@email.com'
   const PASSWORD = 'pass123'

   useEffect(()=>{
      !access && navigate('/')
   },[access])

   async function onSearch(id) {
      try {
          if (!id) alert('Ingresa por favor un ID');
          if (characters.find(char => char.id === parseInt(id))) return alert(`Ya existe el personaje con ese id ${id}`);
  
          const response = await axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-cand3m`);
  
          if (response.data.name) {
              setCharacters(oldChars => [...oldChars, response.data]);
          } else {
              alert('No hay personajes con ese ID');
          }
      } catch (error) {
          console.error(error);
      }
  }

   const onClose = (id)=> setCharacters(characters.filter(char => char.id !== parseInt(id))) 

   async function login(email, password) {
      try {
          const response = await axios.get(`/rickandmorty/login?email=${email}&password=${password}`);
          
          if (response.data.access) {
              
              console.log('Acceso concedido');
          } else {
             
              console.log('Acceso denegado');
          }
      } catch (error) {
          console.error(error);
      }
  }


   return (
      <div className='App'>
        { pathname !== '/' &&  <Nav onSearch={onSearch}/> }
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='*' element={<Error404/>}/>
         </Routes>
         
      </div>
   );
}

export default App;
