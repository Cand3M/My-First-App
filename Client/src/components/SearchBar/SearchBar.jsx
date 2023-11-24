import { useState } from "react";
import styles from './searchBar.module.css';
export default function SearchBar({onSearch}) {

   const [id, setId] = useState('')

   const handleChange = (evento) => {

      setId(evento.target.value)
   }

   const search = ()=>{
      onSearch(id)
      setId('')
   }

   return (
      <div className={styles.searchBar}>
         <input type='search' onChange={handleChange} value={id}  />
         <button onClick={search}>Agregar</button>
      </div>
   );
}

